import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const Confetti = () => {
    useEffect(() => {
        const createConfetti = () => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
            document.body.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        };

        for (let i = 0; i < 200; i++) {
            createConfetti();
        }

        anime({
            targets: '.confetti',
            translateY: '100vh',
            easing: 'linear',
            duration: 3000,
            delay: anime.stagger(100),
            complete: (anim) => {
                anim.animatables.forEach((target) => {
                    target.target.remove();
                });
            },
        });
    }, []);

    return (
        <div className="confetti-container"></div>
    );
};

export default Confetti;
