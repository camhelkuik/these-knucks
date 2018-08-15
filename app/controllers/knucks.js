import Controller from '@ember/controller';

export default Controller.extend({
    knucks: null, 
    knucksArray: ["your mama", "punk cats", "funk rats", "cute bats"],

    actions : {
        generateKnucks(){
            var array = this.get('knucksArray');
            var rand = array[Math.floor(Math.random() * array.length)];
            this.set('knucks', rand);
        }
    }
});
