
//membuat data array berisi 3 lagu favorit (judul, penyanyi, jumlah_likes, jumlah_play)

var lagu = [
    ['Mangu', 'Fourtwnty', 4000, 8000, 'mangu.jpg'],
    ['Slalu Ada di Nadi', 'B.C.L', 1500, 2300, 'jumbo.jpg'],
    ['Lesung Pipi', 'Raim LaOde', 2440, 5400, 'lesung_pipi.jpg'],
    ['GIANTS', 'True Damage', 2700, 6200, 'truedmg.jpg'],
    ['Warriors', 'Imagine Dragons', 2900, 6500, 'warrior.jpg'],
    ['Heavy is the Crown', 'Linkin Park', 5000, 8900, 'crown.jpg'],
    ['Formula 1 Theme Song', 'Bryan Tyler', 4600, 5200, 'f1.jpg']
];

var element = "";

for (var i = 0; i < lagu.length; i++) {
    element += `

        <div class="lagu">
            <h2>${lagu [i][0]}</h2>
            <small>
                <i>Oleh ${lagu [i][1]}</i>
            </small>
            <br>
            <img src="img/${lagu [i][4]}" onerror="this.src='img/no_image.jpg';" alt="cover lagu ${lagu [i][0]}" srcset="">
            <div class="bawah">
                <div class="kanan"><b>${lagu [i][2]} likes</b></div>
                <div class="kiri"><b>${lagu [i][3]} play</b></div>
            </div>
        </div>
    `;
}
var konten = document.getElementById("container");
konten.innerHTML = element
