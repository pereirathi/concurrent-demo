import PropTypes from 'prop-types'
import './layout.css'


const Layout = ({ children }) => (
  <>
    <header className="layout-header">
      <p>concurrent-mode demo</p>
				<a
        className="layout-link"
        href="https://reactjs.org/docs/concurrent-mode-intro.html"
        target="_blank"
        rel="noopener noreferrer"
      	>
        Learn more about concurrent-mode
      	</a>
    </header>
		<main>
			{children}
		</main>
  </>
	)	

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout