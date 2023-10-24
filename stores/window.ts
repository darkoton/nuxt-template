
export const useStoreWindow = defineStore('window', {
  state: () => ({
    device: null,
    innerWidth: 0,
    scroll: {
      scrollTimeout: null,
      startY: 0,
      endY: 0,
      state: false
    }
  }),
  getters: {
  },
  actions: {
    isMobile() {
      const examinationDevice = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            examinationDevice.Android() ||
            examinationDevice.BlackBerry() ||
            examinationDevice.iOS() ||
            examinationDevice.Opera() ||
            examinationDevice.Windows()
          );
        },
      }


      if (examinationDevice.any()) {
        this.device = "mobile";
      } else {
        this.device = "pc";
      }
    },
    offScroll() {
      document.body.classList.add('_lock-scroll')
    },
    onScroll() {
      document.body.classList.remove('_lock-scroll')
    },
    scroll(event) {
      this.window.scroll.scrollHeight = event.target.scrollHeight
      this.window.scroll.clientHeight = event.target.clientHeight

      this.window.scroll.scrollTop = event.target.scrollTop
      if (!this.window.scroll.state) {
        this.window.scroll.startY = event.target.scrollTop
      }

      if (this.window.scroll.scrollTimeout) {
        clearTimeout(this.window.scroll.scrollTimeout);
      }

      this.window.scroll.state = true
      this.window.scroll.endY = event.target.scrollTop


      this.window.scroll.scrollTimeout = setTimeout(() => {
        this.window.scroll.state = false

      }, 200);
    },
  },
})