// metodos-numericos.js
// Lógica principal para la sección de Métodos Numéricos

document.addEventListener('DOMContentLoaded', () => {
    // Bisección
    const form = document.getElementById('form-biseccion');
    const resultado = document.getElementById('biseccion-resultado');
    const btnVolver = document.getElementById('btn-volver-menu');
    if (btnVolver) {
        btnVolver.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Obtener datos
            const metodo = document.getElementById('metodo-seleccionado').value;
            let fxStr = document.getElementById('biseccion-funcion').value;
            fxStr = fxStr.replace(/\^/g, '**');
            fxStr = fxStr.replace(/(\d)(x)/g, '$1*$2');
            fxStr = fxStr.replace(/(x)\s*\(/g, '$1*(');
            fxStr = fxStr.replace(/\)(x)/g, ')*$2');
            const a0 = parseFloat(document.getElementById('biseccion-a').value.replace(',', '.'));
            const b0 = parseFloat(document.getElementById('biseccion-b').value.replace(',', '.'));
            // Validación flexible: Newton necesita solo a0 (X0), otros métodos necesitan ambos
            if (metodo === 'newton') {
                if (isNaN(a0)) {
                    resultado.style.display = 'block';
                    resultado.innerHTML = '<span style="color:red">Por favor ingresa un valor numérico válido para X0.</span>';
                    return;
                }
            } else {
                if (isNaN(a0) || isNaN(b0)) {
                    resultado.style.display = 'block';
                    resultado.innerHTML = '<span style="color:red">Por favor ingresa valores numéricos válidos para a y b.</span>';
                    return;
                }
            }
            const tol = parseFloat(document.getElementById('biseccion-error').value) || 1e-6;
            const maxIter = parseInt(document.getElementById('biseccion-maxiter').value) || 100;
            let f;
            try {
                f = new Function('x', 'return ' + fxStr);
                f(1);
            } catch (err) {
                resultado.style.display = 'block';
                resultado.innerHTML = '<span style="color:red">Función inválida</span>';
                return;
            }
            let a = a0, b = b0, n = 0;
            let tabla = [];
            let error = Math.abs(a - b);
            let xm = null, fxm = null;
            if (metodo === 'biseccion') {
                while (n < maxIter) {
                    // Redondear antes de calcular funciones
                    let xi = Number(a.toFixed(4));
                    let xd = Number(b.toFixed(4));
                    xm = Number(((xi + xd) / 2).toFixed(4));
                    let fa = Number(f(xi).toFixed(4));
                    let fb = Number(f(xd).toFixed(4));
                    fxm = Number(f(xm).toFixed(4));
                    tabla.push({
                        n: n + 1,
                        xi: xi,
                        xd: xd,
                        xm: xm,
                        'f(xi)': fa,
                        'f(xd)': fb,
                        'f(xm)': fxm,
                        'f(xi)*f(xm)': Number((fa * fxm).toFixed(4))
                    });
                    if (error < tol || Math.abs(fxm) < tol) {
                        break;
                    }
                    if (fa * fxm < 0) {
                        b = xm;
                    } else {
                        a = xm;
                    }
                    error = Math.abs(a - b);
                    n++;
                }
            } else if (metodo === 'regla-falsa') {
                while (n < maxIter) {
                    let xi = Number(a.toFixed(4));
                    let xd = Number(b.toFixed(4));
                    let fa = Number(f(xi).toFixed(4));
                    let fb = Number(f(xd).toFixed(4));
                    // Regla falsa: xm = (xi*fb - xd*fa)/(fb-fa)
                    xm = Number(((xi * fb - xd * fa) / (fb - fa)).toFixed(4));
                    fxm = Number(f(xm).toFixed(4));
                    tabla.push({
                        n: n + 1,
                        xi: xi,
                        xd: xd,
                        xm: xm,
                        'f(xi)': fa,
                        'f(xd)': fb,
                        'f(xm)': fxm,
                        'f(xi)*f(xm)': Number((fa * fxm).toFixed(4))
                    });
                    if (error < tol || Math.abs(fxm) < tol) {
                        break;
                    }
                    if (fa * fxm < 0) {
                        b = xm;
                    } else {
                        a = xm;
                    }
                    error = Math.abs(a - b);
                    n++;
                }
            } else if (metodo === 'secante') {
                // Secant method. Use full-precision f() for formula, round only for display.
                // We'll follow the spreadsheet rotation: next (X0,X1) = (X2, X0)
                while (n < maxIter) {
                    const x0 = Number(a.toFixed(4));
                    const x1 = Number(b.toFixed(4));
                    const f0full = f(x0);
                    const f1full = f(x1);
                    const denom = (f1full - f0full);
                    if (Math.abs(denom) < 1e-12) {
                        resultado.style.display = 'block';
                        resultado.innerHTML = '<span style="color:red">Denominador cero en Secante (f(X1)-f(X0)=0)</span>';
                        return;
                    }
                    const x2full = x1 - f1full * (x1 - x0) / denom; // standard secant
                    xm = Number(x2full.toFixed(4));
                    const f0 = Number(f0full.toFixed(4));
                    const f1 = Number(f1full.toFixed(4));
                    fxm = Number(f(xm).toFixed(4));
                    tabla.push({ n: n + 1, x0: x0, x1: x1, x2: xm, 'f(x0)': f0, 'f(x1)': f1, 'f(x2)': fxm });
                    if (Math.abs(xm - x0) < tol || Math.abs(fxm) < tol) break;
                    // rotation to match spreadsheet: new X0 = X2, new X1 = old X0
                    a = xm; b = x0;
                    n++;
                }
            } else if (metodo === 'newton') {
                // Newton - prefer analytic derivative if provided in an input with id 'biseccion-derivada'
                const derivElem = document.getElementById('biseccion-derivada');
                let df = null;
                if (derivElem && derivElem.value.trim() !== '') {
                    let dstr = derivElem.value.replace(/\^/g, '**').replace(/(\d)(x)/g, '$1*$2');
                    try {
                        df = new Function('x', 'return ' + dstr);
                        // quick test
                        df(a0 || 1);
                    } catch (err) {
                        df = null; // fallback to numeric
                    }
                }
                while (n < maxIter) {
                    const x0 = Number(a.toFixed(4));
                    const f0full = f(x0);
                    let fpfull;
                    if (df) {
                        fpfull = df(x0);
                    } else {
                        const h = 1e-6;
                        fpfull = (f(x0 + h) - f(x0 - h)) / (2 * h);
                    }
                    if (Math.abs(fpfull) < 1e-12) {
                        resultado.style.display = 'block';
                        resultado.innerHTML = '<span style="color:red">Derivada cercana a cero en Newton; iteración detenida.</span>';
                        return;
                    }
                    const x1full = x0 - f0full / fpfull;
                    xm = Number(x1full.toFixed(4));
                    const f0 = Number(f0full.toFixed(4));
                    const fp = Number(fpfull.toFixed(4));
                    fxm = Number(f(xm).toFixed(4));
                    tabla.push({ n: n + 1, x0: x0, x1: xm, 'f(x0)': f0, 'fp(x0)': fp, 'f(x1)': fxm });
                    if (Math.abs(xm - x0) < tol || Math.abs(fxm) < tol) break;
                    a = xm;
                    n++;
                }
            }
            // Build results HTML dynamically based on method
            let html = `<h3>Tabla de iteraciones (${metodo})</h3><div style="overflow-x:auto"><table class="biseccion-tabla"><thead><tr>`;
            if (metodo === 'biseccion' || metodo === 'regla-falsa') {
                html += '<th>N</th><th>Xi</th><th>Xd</th><th>Xm</th><th>f(Xi)</th><th>f(Xd)</th><th>f(Xm)</th><th>f(Xi)*f(Xm)</th>';
                html += '</tr></thead><tbody>';
                for (const row of tabla) {
                    html += `<tr><td>${row.n}</td><td>${row.xi.toFixed(4)}</td><td>${row.xd.toFixed(4)}</td><td>${row.xm.toFixed(4)}</td><td>${row['f(xi)'].toFixed(4)}</td><td>${row['f(xd)'].toFixed(4)}</td><td>${row['f(xm)'].toFixed(4)}</td><td>${Number(row['f(xi)*f(xm)']).toFixed(4)}</td></tr>`;
                }
            } else if (metodo === 'secante') {
                html += '<th>N</th><th>X0</th><th>X1</th><th>X2</th><th>f(X0)</th><th>f(X1)</th><th>f(X2)</th>';
                html += '</tr></thead><tbody>';
                for (const row of tabla) {
                    html += `<tr><td>${row.n}</td><td>${row.x0.toFixed(4)}</td><td>${row.x1.toFixed(4)}</td><td>${row.x2.toFixed(4)}</td><td>${row['f(x0)'].toFixed(4)}</td><td>${row['f(x1)'].toFixed(4)}</td><td>${row['f(x2)'].toFixed(4)}</td></tr>`;
                }
            } else if (metodo === 'newton') {
                html += '<th>N</th><th>X0</th><th>f(X0)</th><th>f\'(X0)</th><th>X1</th><th>f(X1)</th>';
                html += '</tr></thead><tbody>';
                for (const row of tabla) {
                    html += `<tr><td>${row.n}</td><td>${row.x0.toFixed(4)}</td><td>${row['f(x0)'].toFixed(4)}</td><td>${row['fp(x0)'].toFixed(4)}</td><td>${row.x1.toFixed(4)}</td><td>${row['f(x1)'].toFixed(4)}</td></tr>`;
                }
            }
            html += '</tbody></table></div>';

            // Ecuaciones realizadas
            html += '<h4>Ecuaciones de cada iteración:</h4><ol style="text-align:left;">';
            for (let i = 0; i < tabla.length; i++) {
                const row = tabla[i];
                if (metodo === 'biseccion') {
                    html += `<li>Xi=${row.xi.toFixed(4)}; Xd=${row.xd.toFixed(4)}; Xm=(Xi+Xd)/2=${row.xm.toFixed(4)}; f(Xi)*f(Xm)=${Number(row['f(xi)*f(xm)']).toFixed(4)}</li>`;
                } else if (metodo === 'regla-falsa') {
                    html += `<li>Xi=${row.xi.toFixed(4)}; Xd=${row.xd.toFixed(4)}; C=(Xi*f(Xd)-Xd*f(Xi))/(f(Xd)-f(Xi))=${row.xm.toFixed(4)}; f(Xi)*f(C)=${Number(row['f(xi)*f(xm)']).toFixed(4)}</li>`;
                } else if (metodo === 'secante') {
                    html += `<li>X0=${row.x0.toFixed(4)}; X1=${row.x1.toFixed(4)}; X2=X1 - f(X1)*(X1-X0)/(f(X1)-f(X0))=${row.x2.toFixed(4)}; f(X2)=${row['f(x2)'].toFixed(4)}</li>`;
                } else if (metodo === 'newton') {
                    html += `<li>X0=${row.x0.toFixed(4)}; f'(X0)≈${row['fp(x0)'].toFixed(4)}; X1=X0 - f(X0)/f'(X0)=${row.x1.toFixed(4)}; f(X1)=${row['f(x1)'].toFixed(4)}</li>`;
                }
            }
            html += '</ol>';
            html += `<p><b>Raíz aproximada:</b> x = ${xm !== null ? xm.toFixed(8) : '-'} <br><b>f(x):</b> ${fxm !== null ? fxm.toFixed(8) : '-'}</p>`;
            resultado.style.display = 'block';
            resultado.innerHTML = html;
        });
    }
});
