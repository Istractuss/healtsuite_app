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

            // Detailed per-iteration breakdown
            function full(v) { try { return Number(v).toPrecision(12); } catch (e) { return String(v); } }
            html += '<h4>Detalle por iteración</h4><div style="text-align:left">';
            for (let i = 0; i < tabla.length; i++) {
                const row = tabla[i];
                html += `<div style="border:1px solid #ddd;padding:8px;margin:8px 0;background:#fafafa;"><strong>Iteración ${row.n}</strong><div style="margin-top:6px;">`;
                if (metodo === 'biseccion' || metodo === 'regla-falsa') {
                    // show Xi, Xd, unrounded f values, formula and rounded result
                    const xi = row.xi; const xd = row.xd; const xm = row.xm;
                    const fxi = row['f(xi)']; const fxd = row['f(xd)']; const fxm = row['f(xm)'];
                    if (metodo === 'biseccion') {
                        const formulaSub = `Xm = (Xi + Xd)/2 = (${full(xi)} + ${full(xd)})/2 = ${full((xi + xd)/2)}`;
                        html += `<div><b>Xi</b>: ${xi.toFixed(4)} (full: ${full(xi)})<br><b>Xd</b>: ${xd.toFixed(4)} (full: ${full(xd)})</div>`;
                        html += `<div style="margin-top:6px"><b>f(Xi)</b>: ${fxi.toFixed(4)} (full: ${full(f(xi))})<br><b>f(Xm)</b>: ${fxm.toFixed(4)} (full: ${full(f(xm))})</div>`;
                        html += `<div style="margin-top:6px"><b>Cálculo</b>: ${formulaSub}<br><b>Resultado mostrado</b>: <b>${xm.toFixed(4)}</b></div>`;
                        html += `<div style="margin-top:6px"><b>Producto</b>: f(Xi)*f(Xm) = (${fxi.toFixed(4)})*(${fxm.toFixed(4)}) = ${Number(row['f(xi)*f(xm)']).toFixed(4)}</div>`;
                    } else {
                        // regla falsa
                        const numer = xi * fxd - xd * fxi;
                        const denom = (fxd - fxi);
                        const xmFull = numer / denom;
                        html += `<div><b>Xi</b>: ${xi.toFixed(4)} (full: ${full(xi)})<br><b>Xd</b>: ${xd.toFixed(4)} (full: ${full(xd)})</div>`;
                        html += `<div style="margin-top:6px"><b>f(Xi)</b>: ${fxi.toFixed(4)} (full: ${full(f(xi))})<br><b>f(Xd)</b>: ${fxd.toFixed(4)} (full: ${full(f(xd))})</div>`;
                        html += `<div style="margin-top:6px"><b>Cálculo</b>: C = (Xi*f(Xd) - Xd*f(Xi)) / (f(Xd)-f(Xi)) = (${full(xi)}*${full(fxd)} - ${full(xd)}*${full(fxi)}) / (${full(fxd)} - ${full(fxi)}) = ${full(xmFull)}<br><b>Resultado mostrado</b>: <b>${xm.toFixed(4)}</b></div>`;
                        html += `<div style="margin-top:6px"><b>Producto</b>: f(Xi)*f(C) = (${fxi.toFixed(4)})*(${fxm.toFixed(4)}) = ${Number(row['f(xi)*f(xm)']).toFixed(4)}</div>`;
                    }
                } else if (metodo === 'secante') {
                    const x0 = row.x0, x1 = row.x1, x2 = row.x2;
                    const f0 = row['f(x0)'], f1 = row['f(x1)'], f2 = row['f(x2)'];
                    // compute internal values from full f using function if available
                    html += `<div><b>X0</b>: ${x0.toFixed(4)} (full: ${full(x0)})<br><b>X1</b>: ${x1.toFixed(4)} (full: ${full(x1)})</div>`;
                    html += `<div style="margin-top:6px"><b>f(X0)</b>: ${f0.toFixed(4)} (full: ${full(f(x0))})<br><b>f(X1)</b>: ${f1.toFixed(4)} (full: ${full(f(x1))})</div>`;
                    const numer = (x1 - x0) * Number(f1.toString());
                    const denom = (Number(f1.toString()) - Number(f0.toString()));
                    const x2full = (Number(x1) - Number(f1.toString()) * (Number(x1) - Number(x0)) / denom);
                    html += `<div style="margin-top:6px"><b>Cálculo secante</b>: X2 = X1 - f(X1)*(X1-X0)/(f(X1)-f(X0)) = (${full(x1)} - ${full(f1)}*(${full(x1)} - ${full(x0)})/(${full(f1)} - ${full(f0)})) = ${full(x2full)}<br><b>Resultado mostrado</b>: <b>${x2.toFixed(4)}</b></div>`;
                    html += `<div style="margin-top:6px"><b>f(X2)</b>: ${f2.toFixed(4)} (full: ${full(f(x2))})</div>`;
                } else if (metodo === 'newton') {
                    const x0 = row.x0, x1 = row.x1;
                    const f0 = row['f(x0)'], fp0 = row['fp(x0)'], f1 = row['f(x1)'];
                    html += `<div><b>X0</b>: ${x0.toFixed(4)} (full: ${full(x0)})</div>`;
                    html += `<div style="margin-top:6px"><b>f(X0)</b>: ${f0.toFixed(4)} (full: ${full(f(x0))})<br><b>f'(X0)</b>: ${fp0.toFixed(4)} (full: ${full(fp0)})</div>`;
                    const x1full = Number(x0) - Number(f(x0)) / Number(fp0);
                    html += `<div style="margin-top:6px"><b>Cálculo Newton</b>: X1 = X0 - f(X0)/f'(X0) = (${full(x0)} - ${full(f(x0))}/${full(fp0)}) = ${full(x1full)}<br><b>Resultado mostrado</b>: <b>${x1.toFixed(4)}</b></div>`;
                    html += `<div style="margin-top:6px"><b>f(X1)</b>: ${f1.toFixed(4)} (full: ${full(f(x1))})</div>`;
                }
                html += '</div></div>';
            }
            html += '</div>';
            html += `<p><b>Raíz aproximada:</b> x = ${xm !== null ? xm.toFixed(8) : '-'} <br><b>f(x):</b> ${fxm !== null ? fxm.toFixed(8) : '-'}</p>`;
            resultado.style.display = 'block';
            resultado.innerHTML = html;
        });
    }
});
