import React from 'react'

function Form () {
	const scrollTo = (section) => {
		document.getElementById(`section${section}`).scrollIntoView({
			behavior: 'smooth'
		})
	}

	return (
		<main class="max-h-screen snap snap-y snap-mandatory">
			<section id="section1" class="page-section" onClick={() => scrollTo('2')}>
				Section 1
			</section>
			<section id="section2" class="page-section" onClick={() => scrollTo('3')}>
				Section 2
			</section>
			<section id="section3" class="page-section" onClick={() => scrollTo('4')}>
				Section 3
			</section>
			<section id="section4" class="page-section" onClick={() => scrollTo('5')}>
				Section 4
			</section>
			<section id="section5" class="page-section" onClick={() => scrollTo('1')}>
				Section 5
			</section>
		</main>
	)
}

export default Form
