import { PopupPositionCalculator } from './PopupPositionCalculator';

export class ModalPopUpController {
  element: HTMLElement;
  triggerId: string | undefined;
  triggerElement: HTMLElement | null = null;

  constructor(elementId: string) {
    this.element = document.getElementById(elementId)!;
    if (!this.element) throw new Error(`Element with id ${elementId} not found`);

    document.body.appendChild(this.element);
    this.triggerId = this.element.dataset.triggerId;

    if (this.triggerId) {
      this.triggerElement = document.getElementById(this.triggerId);
    }

    this.initEvents();
  }

  private initEvents(): void {
    // Trigger click
    if (this.triggerElement) {
      this.triggerElement.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggle(e as MouseEvent);
      });
    } else {
      // Context menu fallback
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.toggle(e as MouseEvent);
      });
    }

    // close 
    window.addEventListener('click', (e) => {
      this.close();
    });

    // Environment changes
    window.addEventListener('scroll', () => this.close(), { passive: true });
    window.addEventListener('resize', () => this.close(), { passive: true });
  }

  private open(e: MouseEvent): void {
    this.prepareVisualState();

    const position = PopupPositionCalculator.calculate(
      this.triggerElement,
      this.element,
      e
    );

    this.applyPosition(position);
    this.animateEntrance();

    if (this.triggerElement) {
      this.triggerElement.classList.add('is-open');
    }
  }

  public close(): void {
    this.element.classList.remove('active');
    if (this.triggerElement) {
      this.triggerElement.classList.remove('is-open');
    }
  }

  private toggle(e: MouseEvent): void {
    if (this.element.classList.contains('active')) {
      this.close();
    } else {
      this.open(e);
    }
  }

  private prepareVisualState(): void {
    this.element.style.transition = 'none';
    this.element.style.opacity = '0';
    this.element.style.transform = 'scale(0)';
  }

  private applyPosition(pos: any): void {
    this.element.style.top = pos.top;
    this.element.style.bottom = pos.bottom;
    this.element.style.left = pos.left;
    this.element.style.right = pos.right;
    this.element.style.transformOrigin = pos.transformOrigin;
  }

  private animateEntrance(): void {
    void this.element.offsetWidth; // Force reflow

    this.element.style.transition = '';
    this.element.style.opacity = '';

    requestAnimationFrame(() => {
      this.element.style.transform = '';
      this.element.classList.add('active');
    });
  }
}
