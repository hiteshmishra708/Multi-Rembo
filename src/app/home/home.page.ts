import { Component } from '@angular/core';
import * as $ from "jquery";
declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  public ngAfterViewInit(): void {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 150,
          density: { 
          enable: !0,
          value_area: 800
        }
      }, color: {
          value: ["#ffffff","#1abc9c","#e74c3c","#e67e22","#f1c40f"]
        }, shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        }, opacity: {
          value: .5,
          random: !1,
          anim: {
            enable: !1,
            speed: 1,
            opacity_min: .1,
            sync: !1
          }
        }, size: {
          value: 6,
          random: !0,
          anim: {
            enable: !1,
            speed: 40,
            size_min: .1,
            sync: !1
          }
        }, line_linked: {
          enable: !0,
          distance: 150,
          color: "#ffffff",
          opacity: .4,
          width: 1
        }, move: {
          enable: !0,
          speed: 6,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          "bounce": false,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 1200
          }
        }
      }, interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: !0,
            mode: "grab"
          }, onclick: {
            enable: !0,
            mode: "push"
          }, resize: true
        }, modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1
            }
          }, bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          }, repulse: {
            distance: 200,
            duration: .4
          }, push: {
            particles_nb: 4
          }, remove: {
            particles_nb: 2
          }
        }
      }, retina_detect: !0,
      config_demo: {
        hide_card: !1,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
      }
    });
    $('#password').focusin(function () {
      $('form').addClass('up')
    });
    $('#password').focusout(function () {
      $('form').removeClass('up')
    });

    // Panda Eye move
    $(document).on("mousemove", function (event) {
      var dw = $(document).width() / 15;
      var dh = $(document).height() / 15;
      var x = event.pageX / dw;
      var y = event.pageY / dh;
      $('.eye-ball').css({
        width: x,
        height: y
      });
    });

    // validation
    $('.btn').click(function () {
    });
  }
}
