Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

var killatJaMuut = ['AS', 'Athene', 'AK', 'FK', 'IK', 'KIK', 'Kemistikilta', 'Maanmittarit', 'PJK', 'Prodeko', 'Täffä', 'Tik', 'Vuorimieskilta', ' Inkubio'];

var wabuHeila = killatJaMuut.randomElement();

window.alert(wabuHeila);
