import { ExpertiseStore } from './expertiseStore'

self.onmessage = function(){
	postMessage(ExpertiseStore.TOPICOS);
};	
