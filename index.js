const canvas = document.getElementById('waterCanvas'); 
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

const waves = []; 
const waveCount = 25; 

for (let i = 0; i < waveCount; i++) { 
    waves.push({ 
        y: (canvas.height / 2) - 100 + Math.random() * 200,  
        length: 0.01 + Math.random() * 0.001, 
        amplitude: 50 + Math.random() * 100, 
        frequency: 0.01 + Math.random() * 0.03, 
        phase: Math.random() * Math.PI * 2 
    }); 
} 

function animate() { 
    requestAnimationFrame(animate); 
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height); 

    waves.forEach((wave, index) => { 
        ctx.beginPath(); 
        ctx.moveTo(0, wave.y); 
        for (let i = 0; i < canvas.width; i++) { 
            const yOffset = Math.sin(i * wave.length + wave.phase) * wave.amplitude * Math.sin(wave.phase); 
            ctx.lineTo(i, wave.y + yOffset); 
        }
        
        const hue = (index * 360 / waveCount) % 360; 
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; 
        ctx.stroke(); 

        wave.phase += wave.frequency; 
    }); 
} 

animate(); 

window.addEventListener('resize', () => { 
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
    waves.forEach((wave) => { 
        wave.y = (canvas.height / 2) - 100 + Math.random() * 200; 
    }); 
}); 


const audio = document.getElementById('music');
const disk = document.querySelector('.cd-disk');

audio.addEventListener('play', () => {
    disk.classList.add('rotate');
});

audio.addEventListener('pause', () => {
    disk.classList.remove('rotate');
});

audio.addEventListener('ended', () => {
    disk.classList.remove('rotate');
});


function handleSubmit(event) {
    event.preventDefault();
    alert('响应成功'); 
}

function reloadInterface() {
    document.getElementById('./index.html').innerHTML = '';

    initializeUIComponents(); 
    reload3DEffects(); 
}