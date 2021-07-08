import sampleModule from './samplecode';
import appendImage from './add-image';
import large from '../img/large.png';
import small from '../img/small.jpeg';
import addTitle from './add-title';
import title from './title.txt';
import Button from './components/button/button';
import Toast from './components/Toast/toast';
import Heading from './components/heading/heading';
import _ from 'lodash';

sampleModule();
addTitle(title);
appendImage(large);
appendImage(small);

const heading = new Heading();
heading.render(_.upperCase('index'));

const button = new Button();
button.render();

const toast = new Toast();
toast.render();

