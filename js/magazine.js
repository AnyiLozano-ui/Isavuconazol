const dataImages = {
	'modal-1': [{ image: './images/image3.jpg' }],
	'modal-2': [{ image: './images/image7.jpg' }],
	'modal-3': [{ image: './images/imagen10.jpg' }],
	'modal-4': [{ image: './images/imagen12.jpg' }],
	'modal-5': [{ image: './images/imagen14.jpg' }],
	'modal-6': [{ image: './images/imagen19.jpg' }],
	'modal-7': [{ image: './images/imagen20.jpg' }],
}

// modal 2
const dataImages1 = {
	'modal-1': [{ image: './images/bott1.jpg' }],
	'modal-2': [{ image: './images/bott2.jpg' }],
	'modal-3': [{ image: './images/bott3.jpg' }],
	'modal-4': [
		{ image: './images/bott4.jpg' },
		{ image: './images/subpop1.jpg' },
		{ image: './images/subpop2.jpg' },
		{ image: './images/subpop3.jpg' },
	],
}

const handleInitTurnjs = () => {
	$('#magazine').turn({
		gradients: true,
		autoCenter: true,
		display: 'single',
		duration: 1500,
		when: {
			start: (event, pageObject, corner) => {
				// ❌ Si la modal está activa, bloquea
				if ($('.modal:visible').length > 0 || $('.modal1:visible').length > 0) {
					console.log('🔒 Bloqueado: modal activa')
					event.preventDefault()
					return false
				}

				// ❌ Si el clic fue sobre tu div personalizado, bloquea
				if ($(event.target).closest('.esquina-custom').length > 0) {
					console.log(
						'🔒 Bloqueado: clic en div esquina personalizada'
					)
					event.preventDefault()
					return false
				}

				// ✅ De lo contrario, permite el giro
			},
		},
	})

	$(window).on('resize', () => {
		if ($('#magazine').data('initialized')) {
		  // 1. Destruir instancia actual
		  $('#magazine').turn('destroy').removeData('initialized');
	
		  // 2. Volver a crearla
		  handleInitTurnjs();
	
		  // 3. (Opcional) volver a configurar tus botones/eventos
		  setNextPreviousButtons();
		}
	  });
}

// const handleEvents = () => {
// 	for (let i = 1; i <= 7; i++) {
// 		$(`.ola${i}`).on({
// 			mouseenter: function () {
// 				$(this)
// 					.find('img')
// 					.css('animation-play-state', 'paused')
// 					.attr('src', `./images/amari${i}.png`)
// 			},
// 			mouseleave: function () {
// 				$(this)
// 					.find('img')
// 					.css('animation-play-state', 'running')
// 					.attr('src', `./images/bola${i}.png`)
// 			},
// 		})
// 	}
// }

const handleGoToView = (selector, page, callback = () => {}) => $(selector).on('click', () => {
	callback()
	$('#magazine').turn('disable', false)
	$('#magazine').turn('page', page)
})

const handleSetModalEvents = (selector, bottom, left, modal) => handleAddClickButton(selector, () => {
	$('#sonido-boton')[0].play()
	$('.modal img').attr('src', dataImages[modal][0].image)
	$('.modal').fadeIn()
	$('#magazine').turn('disable', true)
	$('.modal .modal-adelante').css('bottom', bottom)
	$('.modal .modal-adelante').css('left', left)
	$('.modal .modal-adelante').on('click', () => {
		$('.modal').fadeOut()
		$('#magazine').turn('disable', false)
	})
})

const handleSetModal1Events = (selector, bottom, left, modal, callback = () => {}) => handleAddClickButton(selector, () => {
	
})

const setNextPreviousButtons = () => {
	// Pagina 1
	handleGoToView('.adelante', 2, () => console.log('.adelante'))

	$('.incidencia').on('click', () => {
		$('#magazine').turn('page', 2)
		$('#magazine').turn('disable', false)
	})
	$('.cancer').on('click', () => {
		$('#magazine').turn('page', 4)
		$('#magazine').turn('disable', false)
	})
	$('.avanza').on('click', () => {
		$('#magazine').turn('page', 5)
		handleSetModalEvents('.ola1', '51%', '83.3%', 'modal-1')
		handleSetModalEvents('.ola2', '79%', '46.5%', 'modal-2')
		handleSetModalEvents('.ola3', '89%', '83.5%', 'modal-3')
		handleSetModalEvents('.ola4', '83%', '83.5%', 'modal-4')
		handleSetModalEvents('.ola5', '83%', '83.5%', 'modal-5')

		handleAddClickButton('.ola2', () => {
			dataCounter = 0
			$('#sonido-boton')[0].play()
			modalOpenend = 'modal-2'
			$('.modal img').attr('src', dataImages[modalOpenend][0].image)
			$('.modal').fadeIn()
			$('#magazine').turn('disable', false)
			$('#magazine').turn('disable', true)
			$('.modal .modal-adelante').on('click', () => {
				$('.modal').fadeOut()
				$('#magazine').turn('disable', false)
			})
			$('.modal .modal-adelante').css('bottom', '79%')
			$('.modal .modal-adelante').css('left', ' 46.5%')
		})

		handleAddClickButton('.ola3', () => {
			dataCounter = 0
			$('#sonido-boton')[0].play()
			modalOpenend = 'modal-3'
			$('.modal img').attr('src', dataImages[modalOpenend][0].image)
			$('.modal').fadeIn()
			$('#magazine').turn('disable', true)
			$('.modal .modal-adelante').on('click', () => {
				$('.modal').fadeOut()
				$('#magazine').turn('disable', false)
			})
			$('.modal .modal-adelante').css('bottom', '89%')
			$('.modal .modal-adelante').css('left', ' 83.5%')
		})

		handleAddClickButton('.ola4', () => {
			dataCounter = 0
			$('#sonido-boton')[0].play()
			modalOpenend = 'modal-4'
			$('.modal img').attr('src', dataImages[modalOpenend][0].image)
			$('.modal').fadeIn()
			$('#magazine').turn('disable', true)
			$('.modal .modal-adelante').on('click', () => {
				$('.modal').fadeOut()
				$('#magazine').turn('disable', false)
			})
			$('.modal .modal-adelante').css('bottom', '83%')
			$('.modal .modal-adelante').css('left', ' 83.5%')
		})

		handleAddClickButton('.ola5', () => {
			dataCounter = 0
			$('#sonido-boton')[0].play()
			modalOpenend = 'modal-5'
			$('.modal img').attr('src', dataImages[modalOpenend][0].image)
			$('.modal').fadeIn()
			
			$('.modal .modal-adelante').on('click', () => {
				$('.modal').fadeOut()
				$('#magazine').turn('disable', false)
				$('.modal').css('display', 'none')
			})
			$('.modal .modal-adelante').css('bottom', '83%')
			$('.modal .modal-adelante').css('left', ' 83.5%')
		})
		$('#magazine').turn('disable', false)
	})
	$('.acerca').on('click', () => {
		$('#magazine').turn('page', 6)
	})

	// Pagina 2
	$('.adelante1').on('click', () => {
		$('#magazine').turn('page', 3)
	})
	$('.atras1').on('click', () => {
		console.log('hola Hola')
		$('#magazine').turn('page', 1)
	})

	// Pagina 3
	$('.adelante2').on('click', () => {
		$('#magazine').turn('next')
	})
	$('.atras2').on('click', () => {
		$('#magazine').turn('previous')
	})
	$('.cuadro1').on('click', () => {
		$('#magazine').turn('page', 4)
	})

	// Pagina 4
	handleGoToView('.adelante3', 5)
	handleGoToView('.atras3', 3)
	handleGoToView('.libro1', 5)
	handleGoToView('.libro2', 6)
	$('.adelante4').on('click', () => {
		$('#magazine').turn('page', 6)
	})
	$('.atras4').on('click', () => {
		$('#magazine').turn('page', 4)
	})
}

$(document).ready(() => {
	// Se inicializa el turnjs
	handleInitTurnjs()
	// Esta funcion es para agregar la funcionalidad de los botones de
	// adelante y atras del libro, no hace nada mas
	setNextPreviousButtons()
	// handleEvents()
	// Pagina 1
	handleAddClickButton('.boton', () => {
		$('#sonido-boton')[0].play()
		$('#magazine').turn('page', 2)
	})
	let dataCounter = 0
	let modalOpenend = ''

	$('#magazine').bind('turned', (e, page) => {
		handleSetNewEvents()
		handleSetModalEvents('.ola1', '51%', '83.3%', 'modal-1')
		handleSetModalEvents('.ola2', '79%', '46.5%', 'modal-2')
		handleSetModalEvents('.ola3', '89%', '83.5%', 'modal-3')
		handleSetModalEvents('.ola4', '83%', '83.5%', 'modal-4')
		handleSetModalEvents('.ola5', '83%', '83.5%', 'modal-5')

		// Pagina 2
		$('.adelante1').on('click', () => {
			$('#magazine').turn('page', 3)
		})
		$('.atras1').on('click', () => {
			console.log('hola Hola')
			$('#magazine').turn('page', 1)
		})
		if (page === 3) {
			$('#magazine').turn('disable', false)
			handleSetModalEvents('.ola1', '51%', '83.3%', 'modal-1')
			handleSetModalEvents('.ola2', '79%', '46.5%', 'modal-2')
			handleSetModalEvents('.ola3', '89%', '83.5%', 'modal-3')
			handleSetModalEvents('.ola4', '83%', '83.5%', 'modal-4')
			handleSetModalEvents('.ola5', '83%', '83.5%', 'modal-5')
		}



		if (page === 6) {
			$('.bott1, .bott2, .bott3, .bott4, .subpop, .subpop1').off('click')
			// Pagina 5

			handleAddClickButton('.bott1', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-1'
				$('.modal1 img').attr('src', dataImages1[modalOpenend][0].image)
				$('.modal1').fadeIn()
				$('#magazine').turn('disable', true)
				$('.modal1 .modal-adelante1').on('click', () => {
					$('.modal1').fadeOut()
					$('#magazine').turn('disable', false)
				})
				$('.modal1 .modal-adelante1').css('bottom', '89%')
				$('.modal1 .modal-adelante1').css('left', '84.5%')
			})

			handleAddClickButton('.bott2', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-2'
				$('.modal1 img').attr('src', dataImages1[modalOpenend][0].image)
				$('.modal1').fadeIn()
				$('#magazine').turn('disable', true)
				$('.modal1 .modal-adelante1').on('click', () => {
					$('.modal1').fadeOut()
					$('#magazine').turn('disable', false)
				})
				$('.modal1 .modal-adelante1').css('bottom', '89%')
				$('.modal1 .modal-adelante1').css('left', '84.5%')
			})

			handleAddClickButton('.bott3', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-3'
				$('.modal1 img').attr('src', dataImages1[modalOpenend][0].image)
				$('.modal1').fadeIn()
				$('#magazine').turn('disable', true)
				$('.modal1 .modal-adelante1').on('click', () => {
					$('.modal1').fadeOut()
					$('#magazine').turn('disable', false)
				})
				$('.modal1 .modal-adelante1').css('bottom', '39%')
				$('.modal1 .modal-adelante1').css('left', '84.5%')
			})

			handleAddClickButton('.bott4', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-4'
				$('.modal1 img').attr('src', dataImages1[modalOpenend][0].image)
				$('.modal1').fadeIn()
				$('#magazine').turn('disable', true)
				$('.modal1 .modal-adelante1').on('click', () => {
					$('.modal1').fadeOut()
					$('#magazine').turn('disable', false)
				})
				$('.modal1 .modal-adelante1').css('bottom', '39%')
				$('.modal1 .modal-adelante1').css('left', '84.5%')

				$('.subpop').on('click', () => {
					if (dataCounter < dataImages1[modalOpenend].length - 1) {
						$('.modal1 img').attr(
							'src',
							dataImages1[modalOpenend][dataCounter + 1].image
						)
						$('#sonido-boton')[0].play()
						dataCounter++
					}
				})

				$('.subpop1').on('click', () => {
					if (dataCounter - 1 > -1) {
						$('.modal1 img').attr(
							'src',
							dataImages1[modalOpenend][dataCounter - 1].image
						)
						$('#sonido-boton')[0].play()
						dataCounter--
					}
				})
			})

			
		}
	})

	handlePlaySound()
})
