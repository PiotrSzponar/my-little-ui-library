import './styles/toast.css';

class Toast {
  constructor(element) {
    this.element = element;
    this.message = element.getAttribute('data-message');
  }

  init() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = this.message;
    this.element.appendChild(toast);

    this.element.addEventListener('click', () => {
      toast.classList.add('active');
      setTimeout(() => {
        toast.classList.remove('active');
      }, 3000);
    });
  }
}

export { Toast as default };
