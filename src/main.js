import App from './App.svelte';
import './styles/base.css';
import './styles/util.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;