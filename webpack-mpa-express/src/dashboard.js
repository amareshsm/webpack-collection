import Button from './components/button/button';
import Toast from './components/Toast/toast';
import Heading from './components/heading/heading';
import _ from 'lodash';

const button = new Button();
button.render();

const toast = new Toast();
toast.render();

const heading = new Heading();
heading.render(_.upperCase('dashboard'));