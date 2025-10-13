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
            if (isNaN(a0) || isNaN(b0)) {
                resultado.style.display = 'block';
                resultado.innerHTML = '<span style="color:red">Por favor ingresa valores numéricos válidos para a y b.</span>';
                return;
            }
            const tol = parseFloat(document.getElementById('biseccion-error').value);
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
            }
            let html = `<h3>Tabla de iteraciones (${metodo === 'biseccion' ? 'Bisección' : 'Regla Falsa'})</h3><div style=\"overflow-x:auto\"><table class=\"biseccion-tabla\"><thead><tr><th>N</th><th>X<sub>i</sub></th><th>X<sub>d</sub></th><th>X<sub>m</sub></th><th>f(X<sub>i</sub>)</th><th>f(X<sub>d</sub>)</th><th>f(X<sub>m</sub>)</th><th>f(X<sub>i</sub>)*f(X<sub>m</sub>)</th></tr></thead><tbody>`;
            for (const row of tabla) {
                html += `<tr><td>${row.n}</td><td>${row.xi.toFixed(4)}</td><td>${row.xd.toFixed(4)}</td><td>${row.xm.toFixed(4)}</td><td>${row['f(xi)'].toFixed(4)}</td><td>${row['f(xd)'].toFixed(4)}</td><td>${row['f(xm)'].toFixed(4)}</td><td>${Number(row['f(xi)*f(xm)']).toFixed(4)}</td></tr>`;
            }
            html += '</tbody></table></div>';
            // Ecuaciones realizadas
            html += '<h4>Ecuaciones de cada iteración:</h4><ol style="text-align:left;">';
            for (let i = 0; i < tabla.length; i++) {
                const row = tabla[i];
                if (metodo === 'biseccion') {
                    html += `<li>
                    X<sub>i</sub> = ${row.xi.toFixed(4)}<br>
                    X<sub>d</sub> = ${row.xd.toFixed(4)}<br>
                    X<sub>m</sub> = (X<sub>i</sub> + X<sub>d</sub>) / 2 = (${row.xi.toFixed(4)} + ${row.xd.toFixed(4)}) / 2 = <b>${row.xm.toFixed(4)}</b><br>
                    f(X<sub>i</sub>) * f(X<sub>m</sub>) = (${row['f(xi)'].toFixed(4)}) * (${row['f(xm)'].toFixed(4)}) = <b>${Number(row['f(xi)*f(xm)']).toFixed(4)}</b>
                    </li>`;
                } else if (metodo === 'regla-falsa') {
                    html += `<li>
                    X<sub>i</sub> = ${row.xi.toFixed(4)}<br>
                    X<sub>d</sub> = ${row.xd.toFixed(4)}<br>
                    C = (X<sub>i</sub> * f(X<sub>d</sub>) - X<sub>d</sub> * f(X<sub>i</sub>)) / (f(X<sub>d</sub>) - f(X<sub>i</sub>)) = (${row.xi.toFixed(4)} * ${row['f(xd)'].toFixed(4)} - ${row.xd.toFixed(4)} * ${row['f(xi)'].toFixed(4)}) / (${row['f(xd)'].toFixed(4)} - ${row['f(xi)'].toFixed(4)}) = <b>${row.xm.toFixed(4)}</b><br>
                    f(X<sub>i</sub>) * f(C) = (${row['f(xi)'].toFixed(4)}) * (${row['f(xm)'].toFixed(4)}) = <b>${Number(row['f(xi)*f(xm)']).toFixed(4)}</b>
                    </li>`;
                }
            }
            html += '</ol>';
            html += `<p><b>Raíz aproximada:</b> x = ${xm.toFixed(8)} <br><b>f(x):</b> ${fxm.toFixed(8)}</p>`;
            resultado.style.display = 'block';
            resultado.innerHTML = html;
        });
    }
});
