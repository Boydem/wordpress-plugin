import App from './app'
import { render } from '@wordpress/element'

import './styles/main.scss'

render(<App />, document.getElementById('todo-app'))
