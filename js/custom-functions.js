const handlePlaySound = (callback = () => {}) => $('#magazine').on('turning', () => {
    callback()
    $('#magazine').turn('disable', true)
    $('#sonido-boton')[0].play();
})

const handleAddClickButton = (element, callback) =>
	$(element).on('click', callback)

const handleSetNewEvents = () => {
	// Pagina 1
	handleGoToView('.adelante', 2)
	handleGoToView('.incidencia', 2)
	handleGoToView('.cancer', 4)
	handleGoToView('.avanza', 5)
	handleGoToView('.acerca', 6)
	// Pagina 2
	handleGoToView('.adelante1', 3)
	handleGoToView('.atras1', 1)
	// Pagina 3
	handleGoToView('.adelante2', 4)
	handleGoToView('.atras2', 2)
	handleGoToView('.cuadro1', 4)
	// Pagina 4
	handleGoToView('.adelante3', 5)
	handleGoToView('.atras3', 3)
	handleGoToView('.libro1', 5)
	handleGoToView('.libro2', 6)
	// Pagina 5
	handleGoToView('.adelante4', 6)
	handleGoToView('.atras4', 4)
	// Pagina 6
	handleGoToView('.adelante5', 7)
	handleGoToView('.atras5', 5)
	handleGoToView('.adelante5', 7)
	// Pagina 7
	handleGoToView('.adelante6', 8)
	handleGoToView('.atras6', 6)
	// Pagina 8
	handleGoToView('.atras7', 7)
}