// metodos-numericos.js
// Logica principal para la seccion de Métodos Numericos

document.addEventListener('DOMContentLoaded', () => {
    // Biseccion
    const form = document.getElementById('form-biseccion');
    const resultado = document.getElementById('biseccion-resultado');
    const btnVolver = document.getElementById('btn-volver-menu');
    if (btnVolver) {
        btnVolver.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    if (form) {
    // Validacion en tiempo real: activar/desactivar submit y mostrar mensajes
        const submitBtn = form.querySelector('button[type="submit"]');
        const spanTol = document.getElementById('error-tol');
        const spanA = document.getElementById('error-a');
        const spanB = document.getElementById('error-b');
        const funcInput = document.getElementById('biseccion-funcion');
        const metodoSelect = document.getElementById('metodo-seleccionado');

        // Mejora visual: crear "pills" (botones) para seleccionar método
        (function enhanceMethodPicker() {
            if (!metodoSelect) return;
            // metadatos para cada método (icono y descripción corta)
            const metodoMeta = {
                'biseccion': { icon: '↔️', title: 'Bisección', desc: 'Divide el intervalo; necesita Xi y Xd con signos opuestos.' },
                'regla-falsa': { icon: '📐', title: 'Regla Falsa', desc: 'Interpolación lineal entre extremos.' },
                'secante': { icon: '🔗', title: 'Secante', desc: 'Usa dos puntos; rápida con buena aproximación.' },
                'newton': { icon: '⚙️', title: 'Newton', desc: 'Newton-Raphson; necesita X0 y opcionalmente la derivada.' }
            };

            // crear contenedor de pills si no existe
            let pills = document.getElementById('metodo-pills');
            if (!pills) {
                pills = document.createElement('div');
                pills.id = 'metodo-pills';
                pills.className = 'metodo-pills';
                // insertar antes del input de función para mantener el diseño
                const insertAfter = metodoSelect.parentNode;
                insertAfter.parentNode.insertBefore(pills, insertAfter.nextSibling);
            }

            // generar botones basados en las opciones del select
            pills.innerHTML = '';
            Array.from(metodoSelect.options).forEach(opt => {
                const key = opt.value;
                const meta = metodoMeta[key] || { icon: '', title: opt.text, desc: '' };
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'metodo-pill';
                btn.setAttribute('data-metodo', key);
                btn.setAttribute('aria-pressed', metodoSelect.value === key ? 'true' : 'false');
                btn.title = meta.desc || opt.text;
                btn.innerHTML = `<span class="metodo-pill-icon">${meta.icon}</span><span class="metodo-pill-label">${meta.title}</span>`;
                btn.addEventListener('click', () => {
                    // sincronizar con el select y disparar change
                    if (metodoSelect.value === key) return;
                    metodoSelect.value = key;
                    metodoSelect.dispatchEvent(new Event('change'));
                });
                pills.appendChild(btn);
            });

            // función para actualizar estado activo en pills
            function updatePillsActive() {
                const val = metodoSelect.value;
                Array.from(pills.querySelectorAll('.metodo-pill')).forEach(b => {
                    const k = b.getAttribute('data-metodo');
                    const active = k === val;
                    b.classList.toggle('active', active);
                    b.setAttribute('aria-pressed', active ? 'true' : 'false');
                });
            }

            // ocultar el select nativo (seguirá existiendo para el código)
            metodoSelect.style.display = 'none';

            // actualizar al inicio y cuando el select cambie por otro medio
            updatePillsActive();
            metodoSelect.addEventListener('change', updatePillsActive);
        })();

        function setErr(el, msg) {
            if (!el) return;
            el.textContent = msg || '';
        }

        function validateForm() {
            let ok = true;
            setErr(spanTol, ''); setErr(spanA, ''); setErr(spanB, '');
            const metodo = metodoSelect.value;
            const aVal = document.getElementById('biseccion-a').value.replace(',', '.').trim();
            const bVal = document.getElementById('biseccion-b').value.replace(',', '.').trim();
            const tolVal = parseFloat(document.getElementById('biseccion-error').value);

            // tolerancia
            if (isNaN(tolVal) || !(tolVal > 0 && tolVal < 1)) {
                setErr(spanTol, 'La tolerancia debe estar entre 0 y 1 (excl.).');
                ok = false;
            }

            // comprobar XI/XD numericos segnn el metodo
            const aNum = parseFloat(aVal);
            const bNum = parseFloat(bVal);
            if (metodo === 'newton') {
                if (isNaN(aNum)) { setErr(spanA, 'X0 inválido'); ok = false; }
            } else {
                if (isNaN(aNum)) { setErr(spanA, 'Xi inválido'); ok = false; }
                if (isNaN(bNum)) { setErr(spanB, 'Xd inválido'); ok = false; }
                if (!isNaN(aNum) && !isNaN(bNum) && aNum === bNum) { setErr(spanB, 'Xi y Xd no pueden ser iguales'); ok = false; }
            }

            // biseccion/regla-falsa: f(a) y f(b) con signos opuestos
            if ((metodo === 'biseccion' || metodo === 'regla-falsa') && ok) {
                try {
                    const fxStr = funcInput.value.replace(/\^/g, '**').replace(/(\d)(x)/g, '$1*$2').replace(/(x)\s*\(/g, '$1*(').replace(/\)(x)/g, ')*$2'); //hace la ecuacion entendible para js
                    const ffn = new Function('x', 'return ' + fxStr);
                    const fa = Number(ffn(aNum));
                    const fb = Number(ffn(bNum));
                    if (isNaN(fa) || isNaN(fb) || (fa * fb >= 0)) {
                        //verifica que los ejes esten en lados opuestos o no sean cero
                        setErr(spanA, 'f(Xi) y f(Xd) deben tener signos opuestos');
                        setErr(spanB, 'f(Xi) y f(Xd) deben tener signos opuestos');
                        ok = false;
                    }
                } catch (err) {
                    setErr(spanA, 'Funcion invalida'); ok = false;
                }
            }

            if (submitBtn) submitBtn.disabled = !ok;
            return ok;
        }

    // Añadir listeners para validación en tiempo real
        ['input', 'change'].forEach(ev => {
            document.getElementById('biseccion-error').addEventListener(ev, validateForm);
            document.getElementById('biseccion-a').addEventListener(ev, validateForm);
            document.getElementById('biseccion-b').addEventListener(ev, validateForm);
            document.getElementById('biseccion-funcion').addEventListener(ev, validateForm);
            document.getElementById('metodo-seleccionado').addEventListener(ev, validateForm);
        });

    // validación inicial
    validateForm();

    // Limpiar resultados al cambiar metodo
        if (metodoSelect) {
            metodoSelect.addEventListener('change', () => {
                if (resultado) {
                    resultado.style.display = 'none';
                    resultado.innerHTML = '';
                }
                const guia = document.getElementById('metodos-guia');
                if (guia) guia.style.display = 'none';
                // revalidar según el nuevo método
                validateForm();
            });
        }
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
            // Validación flexible: Newton necesita solo a0 (X0), otros metodos necesitan ambos
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
            
            // tolerancia entre 0 y 1
            // Xi y Xd no pueden ser iguales (cuando aplique)
            // f(Xi) y f(Xd) deben tener signos diferentes (para biseccion y regla falsa)
            const tolInput = parseFloat(document.getElementById('biseccion-error').value);
            if (isNaN(tolInput) || !(tolInput > 0 && tolInput < 1)) {
                resultado.style.display = 'block';
                resultado.innerHTML = '<span style="color:red">La tolerancia debe ser un número mayor que 0 y menor que 1.</span>';
                return;
            }
            // comprobar igualdad Xi/Xd cuando aplique
            if (metodo === 'biseccion' || metodo === 'regla-falsa' || metodo === 'secante') {
                if (a0 === b0) {
                    resultado.style.display = 'block';
                    resultado.innerHTML = '<span style="color:red">Xi y Xd no pueden ser el mismo valor.</span>';
                    return;
                }
            }
            // bisección/regla-falsa: f(Xi) y f(Xd) con signos opuestos
            if (metodo === 'biseccion' || metodo === 'regla-falsa') {
                let fxiFull, fxdFull;
                try {
                    fxiFull = f(a0);
                    fxdFull = f(b0);
                } catch (err) {
                    resultado.style.display = 'block';
                    resultado.innerHTML = '<span style="color:red">Error al evaluar la función en los puntos iniciales.</span>';
                    return;
                }
                if (Number(fxiFull) * Number(fxdFull) >= 0) {
                    resultado.style.display = 'block';
                    resultado.innerHTML = '<span style="color:red">f(Xi) y f(Xd) deben tener signos diferentes (f(Xi)*f(Xd) &lt; 0) para Bisección/Regla Falsa.</span>';
                    return;
                }
            }
            let a = a0, b = b0, n = 0;
            let tabla = [];
            let error = Math.abs(a - b);
            let xm = null, fxm = null;
            if (metodo === 'biseccion') {
                while (n < maxIter) {
                    // Redondear antes de evaluar f
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
                // Secante: usar f() en precisión completa; redondear solo para mostrar
                // Rotación tipo hoja: (X0,X1) <- (X2,X0)
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
                    const x2full = x1 - f1full * (x1 - x0) / denom; // fórmula secante
                    xm = Number(x2full.toFixed(4));
                    const f0 = Number(f0full.toFixed(4));
                    const f1 = Number(f1full.toFixed(4));
                    fxm = Number(f(xm).toFixed(4));
                    tabla.push({ n: n + 1, x0: x0, x1: x1, x2: xm, 'f(x0)': f0, 'f(x1)': f1, 'f(x2)': fxm });
                    if (Math.abs(xm - x0) < tol || Math.abs(fxm) < tol) break;
                    // rotación para hoja: nuevo X0 = X2, nuevo X1 = X0 previo
                    a = xm; b = x0;
                    n++;
                }
            } else if (metodo === 'newton') {
                // Newton: usar derivada analítica si está en '#biseccion-derivada'
                const derivElem = document.getElementById('biseccion-derivada');
                let df = null;
                if (derivElem && derivElem.value.trim() !== '') {
                    let dstr = derivElem.value.replace(/\^/g, '**').replace(/(\d)(x)/g, '$1*$2');
                    try {
                        df = new Function('x', 'return ' + dstr);
                        // prueba rápida
                        df(a0 || 1);
                    } catch (err) {
                        df = null; // si falla, usar derivada numérica
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
            // Construir tabla de resultados según el método
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
            html += `<p><b>Raíz aproximada:</b> x = ${xm !== null ? xm.toFixed(8) : '-'} <br><b>f(x):</b> ${fxm !== null ? fxm.toFixed(8) : '-'}</p>`;
            resultado.style.display = 'block';
            resultado.innerHTML = html;
        });
    }
});
