// import "./Typewriter.js";
import { useEffect } from "react";
import "./Typewriter.css";

function Typewriter({ dataTypes = [] }) {
  useEffect(() => {
    let timeoutId = null;
    let typewriterInstance = null;
    
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.isDeleting = false;
      this.timeoutId = null;
      this.tick();
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        this.timeoutId = setTimeout(function() {
        that.tick();
        }, delta);
    };
    
    TxtType.prototype.stop = function() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    };
    
    // Wait for DOM to be ready before initializing
    timeoutId = setTimeout(() => {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            // Check if this element has already been initialized
            if (elements[i].getAttribute('data-typewriter-initialized') === 'true') {
                continue;
            }
            
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              // Mark as initialized to prevent multiple instances
              elements[i].setAttribute('data-typewriter-initialized', 'true');
              typewriterInstance = new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    }, 100);
    
    // Cleanup function to stop typewriter when component unmounts
    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (typewriterInstance && typewriterInstance.stop) {
            typewriterInstance.stop();
        }
        // Remove the initialized flag so it can be re-initialized if needed
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            elements[i].removeAttribute('data-typewriter-initialized');
        }
    };
  
  }, [])

  return (
    <>
      <div className="typing-component">
        <a
          href=""
          class="typewrite"
          data-period="2000"
          data-type={JSON.stringify(dataTypes)}
        >
          <span class="wrap"></span>
        </a>
      </div>
    </>
  );
}

export default Typewriter;
