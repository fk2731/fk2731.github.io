interface PositionResult {
  top: string;
  left: string;
  right: string;
  bottom: string;
  transformOrigin: string;
}

export class PopupPositionCalculator {
  /**
   * Calcula las coordenadas y el origen de la animación
  * @param triggerEl Elemento que dispara el popup (puede ser null)
  * @param popupEl Elemento del popup a posicionar
  * @param e evento del mouse (para casos sin trigger)
   */
  public static calculate(
    triggerEl: HTMLElement | null,
    popupEl: HTMLElement,
    e: MouseEvent
  ): PositionResult {
    const rect = popupEl.getBoundingClientRect();
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // 1. Obtener métricas del Trigger (o del mouse si no hay trigger)
    const triggerRect = triggerEl
      ? triggerEl.getBoundingClientRect()
      : {
        top: e.clientY, left: e.clientX,
        right: e.clientX, bottom: e.clientY,
        width: 0, height: 0
      };

    // 2. Calcular Overlap (Sangrado)
    let overlapOffset = 0;
    if (triggerEl) {
      const borderRadiusStr = getComputedStyle(popupEl).borderRadius;
      overlapOffset = (parseInt(borderRadiusStr) / 5) || 0;
    }

    // 3. Leer preferencias
    let preferredX = 'left';
    let preferredY = 'bottom';

    if (triggerEl) {
      const pref = triggerEl.dataset.position || '';
      if (pref.includes('right')) preferredX = 'right';
      if (pref.includes('top')) preferredY = 'top';
    }

    // 4. Cálculos
    const xResult = this.calculateX(triggerRect, rect.width, winW, scrollX, overlapOffset, preferredX);
    const yResult = this.calculateY(triggerRect, rect.height, winH, scrollY, overlapOffset, preferredY);

    return {
      ...xResult.styles,
      ...yResult.styles,
      transformOrigin: `${yResult.origin} ${xResult.origin}`
    };
  }

  /** CátriggerId={id}lculo de la posición horizontal 
   * @param trigger
   * @param popupWidth
   * @param winW
   * @param scrollX
   * @param offset
   * @param preference 
   */
  private static calculateX(
    trigger: DOMRect | { right: number; left: number },
    popupWidth: number,
    winW: number,
    scrollX: number,
    offset: number,
    preference: string
  ) {
    const fitsFromRightAlign = (trigger.right - popupWidth) > 0;
    const fitsFromLeftAlign = (trigger.left + popupWidth) <= winW;

    // Si prefiere derecha y cabe, O si NO cabe a la izq pero sí a la derecha
    if ((preference === 'right' && fitsFromRightAlign) || (!fitsFromLeftAlign && fitsFromRightAlign)) {
      const rightPos = document.documentElement.clientWidth - (trigger.right + scrollX + offset);
      return {
        styles: { right: `${rightPos}px`, left: 'auto' },
        origin: 'right'
      };
    }

    // Default: Izquierda
    return {
      styles: { left: `${trigger.left + scrollX - offset}px`, right: 'auto' },
      origin: 'left'
    };
  }

  private static calculateY(
    trigger: DOMRect | { top: number; bottom: number },
    popupHeight: number,
    winH: number,
    scrollY: number,
    offset: number,
    preference: string
  ) {
    const fitsTop = (trigger.top - popupHeight) > 0;
    const fitsBottom = (trigger.bottom + popupHeight) <= winH;

    // Si prefiere arriba y cabe, O si NO cabe abajo pero sí arriba
    if ((preference === 'top' && fitsTop) || (!fitsBottom && fitsTop)) {
      const topPos = (trigger.bottom + scrollY + offset) - popupHeight;
      return {
        styles: { top: `${topPos}px`, bottom: 'auto' },
        origin: 'bottom'
      };
    }

    // Default: Abajo
    return {
      styles: { top: `${trigger.top + scrollY - offset}px`, bottom: 'auto' },
      origin: 'top'
    };
  }
}
