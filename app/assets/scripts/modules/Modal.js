import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() { // event handlers
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// clicking the x close button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible"); // this won't work because we call from the event handler, that's why we add 'bind'
		return false; // stop reloading the # link
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;