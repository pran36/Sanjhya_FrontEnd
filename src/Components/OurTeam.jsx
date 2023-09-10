import React from 'react'

function OurTeam() {
    const slider = document.querySelector('.slides');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
  return (
    <>
        <h1 className='ourteam'>Our Team</h1>
        <div className='image-gallery'>
            <div className='slides'>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            <div className='slide'>
                <img src="Images/prayash.jpg" alt="" />
                <p>This is a sample Text on what we will write here</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default OurTeam