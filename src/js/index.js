import '../style/css/main.css';
import '../style/scss/main.scss';
import {hello, arr} from './module';
import {inlinesourcemapFn} from './inlinesourcemap';
import '@babel/polyfill';


console.log('this is index.js!!!!!');

arr();

hello();

inlinesourcemapFn();