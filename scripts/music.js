var selection = 2;
var frame_select = 2;
var albums = {
    0: {name: "Speak Now", img: "../images/albums/20-speak-now.jpg"},
    1: {name: "Lover", img: "../images/albums/lover.jpg"},
    2: {name: "Ours", img: "../images/albums/27-ours.jpg"},
    3: {name: "Itunes Live From Soho", img: "../images/albums/6-itunes-live-from-soho.jpg"},
    4: {name: "The Taylor Swift Holiday Collection", img: "../images/albums/7-the-taylor-swift-holiday-collection.jpg"},
    5: {name: "Two Is Better Than One", img: "../images/albums/17-two-is-better-than-one.jpg"},
    6: {name: "Highway Dont Care", img: "../images/albums/43-highway-dont-care.jpg"},
    7: {name: "Wildest Dreams", img: "../images/albums/49-wildest-dreams.jpg"},
    8: {name: "Style", img: "../images/albums/47-style.jpg"},
    9: {name: "Fearless", img: "../images/albums/15-fearless.jpg"},
    10: {name: "Taylor Swift Speak Now", img: "../images/albums/taylor-swift-speak-now.jpg"},
    11: {name: "Love Story", img: "../images/albums/11-love-story.jpg"},
    12: {name: "Folklore", img: "../images/albums/folklore.jpg"},
    13: {name: "Eyes Open", img: "../images/albums/33-eyes-open.jpg"},
    14: {name: "Ready For It", img: "../images/albums/55-ready-for-it.jpg"},
    15: {name: "Beautiful Eyes", img: "../images/albums/8-beautiful-eyes.jpg"},
    16: {name: "1989", img: "../images/albums/52-1989.jpg"},
    17: {name: "Look What You Made Me Do", img: "../images/albums/54-look-what-you-made-me-do.jpg"},
    18: {name: "Tim Mcgraw", img: "../images/albums/1-tim-mcgraw.jpg"},
    19: {name: "Safe Sound", img: "../images/albums/30-safe-sound.jpg"},
    20: {name: "Red", img: "../images/albums/42-red.jpg"},
    21: {name: "Sweeter Than Fiction", img: "../images/albums/44-sweeter-than-fiction.jpg"},
    22: {name: "Back To December", img: "../images/albums/22-back-to-december.jpg"},
    23: {name: "Shake It Off", img: "../images/albums/45-shake-it-off.jpg"},
    24: {name: "Christmas Tree Farm", img: "../images/albums/christmas-tree-farm.jpg"},
    25: {name: "Red", img: "../images/albums/39-red.jpg"},
    26: {name: "Blank Space", img: "../images/albums/46-blank-space.jpg"},
    27: {name: "Willow", img: "../images/albums/willow.jpg"},
    28: {name: "22", img: "../images/albums/38-22.jpg"},
    29: {name: "Teardrops On My Guitar", img: "../images/albums/2-teardrops-on-my-guitar.jpg"},
    30: {name: "Ronan", img: "../images/albums/35-ronan.jpg"},
    31: {name: "The Last Time", img: "../images/albums/41-the-last-time.jpg"},
    32: {name: "Taylor Swift", img: "../images/albums/5-taylor-swift.jpg"},
    33: {name: "Picture To Burn", img: "../images/albums/4-picture-to-burn.jpg"},
    34: {name: "I Dont Wanna Live Forever", img: "../images/albums/52-i-dont-wanna-live-forever.jpg"},
    35: {name: "The Story Of Us", img: "../images/albums/25-the-story-of-us.jpg"},
    36: {name: "Taylor Swift Me", img: "../images/albums/taylor-swift-me.jpg"},
    37: {name: "Bad Blood", img: "../images/albums/48-bad-blood.jpg"},
    38: {name: "Mine", img: "../images/albums/21-mine.jpg"},
    39: {name: "Today Was A Fairytale", img: "../images/albums/19-today-was-a-fairytale.jpg"},
    40: {name: "Lover Remix", img: "../images/albums/lover-remix.jpg"},
    41: {name: "Evermore", img: "../images/albums/67-evermore.jpg"},
    42: {name: "You Need To Calm Down", img: "../images/albums/you-need-to-calm-down.jpg"},
    43: {name: "State Of Grace", img: "../images/albums/37-state-of-grace.jpg"},
    44: {name: "Half Of My Heart", img: "../images/albums/18-half-of-my-heart.jpg"},
    45: {name: "White Horse", img: "../images/albums/12-white-horse.jpg"},
    46: {name: "Both Of Us", img: "../images/albums/32-both-of-us.jpg"},
    47: {name: "Speak Now World Tour Live", img: "../images/albums/29-speak-now-world-tour-live.jpg"},
    48: {name: "Out Of The Woods", img: "../images/albums/50-out-of-the-woods.jpg"},
    49: {name: "You Belong With Me", img: "../images/albums/13-you-belong-with-me.jpg"},
    50: {name: "The Archer", img: "../images/albums/the-archer.jpg"},
    51: {name: "Begin Again", img: "../images/albums/24-begin-again.jpg"},
    52: {name: "Our Song", img: "../images/albums/3-our-song.jpg"},
    53: {name: "Youre Not Sorry", img: "../images/albums/10-youre-not-sorry.jpg"},
    54: {name: "Fifteen", img: "../images/albums/14-fifteen.jpg"},
    55: {name: "We Are Never Ever Getting Back Together", img: "../images/albums/34-we-are-never-ever-getting-back-together.jpg"},
    56: {name: "Only The Young", img: "../images/albums/only-the-young.jpg"},
    57: {name: "Fearless Taylors Version", img: "../images/albums/69-fearless-taylors-version.jpg"},
    58: {name: "New Romantics", img: "../images/albums/51-new-romantics.jpg"},
    59: {name: "Change", img: "../images/albums/9-change.jpg"},
    60: {name: "Fearless", img: "../images/albums/16-fearless.jpg"},
    61: {name: "Beautiful Ghosts", img: "../images/albums/beautiful-ghosts.jpg"},
    62: {name: "Mean", img: "../images/albums/23-mean.jpg"},
    63: {name: "Long Live", img: "../images/albums/31-long-live.jpg"},
    64: {name: "Cardigan", img: "../images/albums/cardigan.jpg"},
    65: {name: "Sparks Fly", img: "../images/albums/26-sparks-fly.jpg"},
    66: {name: "Everything Has Changed", img: "../images/albums/40-everything-has-changed.jpg"},
    67: {name: "Reputation", img: "../images/albums/54-reputation.jpg"},
}
var songDat = {
    "1989": {
        1: "Welcome To New York",
        2: "Blank Space",
        3: "Style",
        4: "Out Of The Woods",
        5: "Ayhtdws",
        6: "Shake It Off",
        7: "I Wish You Would",
        8: "Bad Blood",
        9: "Wildest Dreams",
        10: "Hygtg",
        11: "This Love",
        12: "I Know Places",
        13: "Clean",
        14: "Wonderland",
        15: "You Are In Love",
        16: "New Romantics",
    },
    "Debut": {
        1: "Tim Mcgraw",
        2: "Picture To Burn",
        3: "Teardrops On My Guitar",
        4: "Apitw",
        5: "Cold As You",
        6: "The Outside",
        7: "Ttwas",
        8: "Stay Beautiful",
        9: "Should've Said No",
        10: "Mary's Song",
        11: "Our Song",
        12: "Iomwiwy",
        13: "Invisible",
        14: "A Perfectly Good Heart",
    },
    "Evermore": {
        1: "Willow",
        2: "Champagne Problems",
        3: "Gold Rush",
        4: "Ttds",
        5: "Tolerate It",
        6: "Nbnc",
        7: "Happiness",
        8: "Dorothea",
        9: "Coney Island",
        10: "Ivy",
        11: "Cowboy Like Me",
        12: "Long Story Short",
        13: "Marjorie",
        14: "Closure",
        15: "Evermore",
        16: "Rwylm",
        17: "It's Time To Go",
    },
    "Fearless": {
        1: "Fearless",
        2: "Fifteen",
        3: "Love Story",
        4: "Hey Stephen",
        5: "White Horse",
        6: "You Belong With Me",
        7: "Breathe",
        8: "Tell Me Why",
        9: "You're Not Sorry",
        10: "Twily",
        11: "Forever & Always",
        12: "The Best Day",
        13: "Change",
        14: "Jump Then Fall",
        15: "Untouchable",
        16: "Forever & Always (piano)",
        17: "Ciwtr",
        18: "Superstar",
        19: "Tosotd",
        20: "Today Was A Fairytale",
        21: "You All Over Me (ftv)",
        22: "Mr. Perfectly Fine (ftv)",
        23: "We Were Happy (ftv)",
        24: "That's When (ftv)",
        25: "Don't You (ftv)",
        26: "Bye Bye Baby (ftv)",
    },
    "Folklore": {
        1: "The 1",
        2: "Cardigan",
        3: "Tlgad",
        4: "Exile",
        5: "My Tears Ricochet",
        6: "Mirrorball",
        7: "Seven",
        8: "August",
        9: "This Is Me Trying",
        10: "Illicit Affairs",
        11: "Invisible String",
        12: "Mad Woman",
        13: "Epiphany",
        14: "Betty",
        15: "Peace",
        16: "Hoax",
        17: "The Lakes",
    },
    "Lover": {
        1: "Iftye",
        2: "Cruel Summer",
        3: "Lover",
        4: "The Man",
        5: "The Archer",
        6: "I Think He Knows",
        7: "Maathbp",
        8: "Paper Rings",
        9: "Cornelia Street",
        10: "Dbatc",
        11: "London Boy",
        12: "Sygb",
        13: "False God",
        14: "Yntcd",
        15: "Afterglow",
        16: "Me!",
        17: "Inthaf",
        18: "Daylight",
    },
    "Red": {
        1: "State Of Grace",
        2: "Red",
        3: "Treacherous",
        4: "Ikywt",
        5: "All Too Well",
        6: "22",
        7: "I Almost Do",
        8: "Wanegbt",
        9: "Stay Stay Stay",
        10: "The Last Time",
        11: "Holy Ground",
        12: "Sad Beautiful Tragic",
        13: "The Lucky One",
        14: "Everything Has Changed",
        15: "Starlight",
        16: "Begin Again",
        17: "The Moment I Knew",
        18: "Come Back… Be Here",
        19: "Girl At Home",
        20: "State Of Grace (acoustic)",
        22: "Better Man (ftv)",
        23: "Nothing New (ftv)",
        24: "Babe (ftv)",
        25: "Message In A Bottle (ftv)",
        26: "I Bet You Think About Me (ftv",
        27: "Forever Winter (ftv)",
        28: "Run (ftv)",
        29: "The Very First Night (ftv)",
        30: "All Too Well (tmv)",
    },
    "Reputation": {
        1: "…ready For It?",
        2: "End Game",
        3: "I Did Something Bad",
        4: "Don't Blame Me",
        5: "Delicate",
        6: "Lwymmd",
        7: "So It Goes…",
        8: "Gorgeous",
        9: "Getaway Car",
        10: "King Of My Heart",
        11: "Dwoht",
        12: "Dress",
        13: "Tiwwchnt",
        14: "Ciwyw",
        15: "New Year's Day",
    },
    "Speak Now": {
        1: "Mine",
        2: "Sparks Fly",
        3: "Back To December",
        4: "Speak Now",
        5: "Dear John",
        6: "Mean",
        7: "The Story Of Us",
        8: "Never Grow Up",
        9: "Enchanted",
        10: "Better Than Revenge",
        11: "Innocent",
        12: "Haunted",
        13: "Last Kiss",
        14: "Long Live",
        15: "Ours",
        16: "If This Was A Movie",
        17: "Superman",
    }
}
const NUM_ALBS = 67;
console.log(albums);

function pageSetup() {
    activate(frame_select - 2);
    updateSelection();
}

function deactivateAll() {
    document.getElementById("img0").parentElement.classList.remove("selected-item");
    document.getElementById("img1").parentElement.classList.remove("selected-item");
    document.getElementById("img2").parentElement.classList.remove("selected-item");
    document.getElementById("img3").parentElement.classList.remove("selected-item");
    document.getElementById("img4").parentElement.classList.remove("selected-item");
}

function setUpSongData() {
    let album = getAlbum(selection - frame_select - 2);
    document.getElementById("song-title").textContent = album.name;
    let songs = songDat[album.name];
    let songList = document.getElementById("song-list");
    songList.innerHTML = "";
    c = 0;
    for (s in songs) {
        c++;
        let l = document.createElement("p");
        l.textContent = s + ". " + songs[s];
        songList.appendChild(l);
    }
    if (c == 0) {
        let l = document.createElement("p");
        l.textContent = "Single";
        songList.appendChild(l);
    }
}

function activate(offset) {
    deactivateAll();
    let img = document.getElementById("img" + (offset + 2).toString())
    img.parentElement.classList.add("selected-item");
    frame_select = offset + 2;
    setUpSongData();
}

function getAlbum(index) {
    let result = null;
    if (index > NUM_ALBS) {
        result = index - NUM_ALBS - 1;
        console.log(index, "-", NUM_ALBS);
    }
    else if (index < 0) {
        result = NUM_ALBS + index + 1;
        console.log(NUM_ALBS, "-", index);
    }
    else {
        result = index;
        console.log("ELSE");
    }
    console.log(result);
    console.log(albums[result]);
    return albums[result];
}

function btnInc() {
    selection = selection + 1;
    if (selection > NUM_ALBS) {
        selection = 0;
    }
    updateSelection();
    setUpSongData();
}

function btnDec() {
    selection = selection - 1;
    if (selection < 0) {
        selection = NUM_ALBS;
    }
    updateSelection();
    setUpSongData();
}

function updateSelection() {
    if (selection < 0) {
        selection = selection + NUM_ALBS;
    }
    else if (selection > NUM_ALBS) {
        selection = selection - NUM_ALBS;
    }

    let img0 = document.getElementById("img0");
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");

    img0.src = getAlbum(selection - 2).img;
    //console.log(getAlbum(selection - 2));
    img1.src = getAlbum(selection - 1).img;
    //console.log(getAlbum(selection - 1));
    img2.src = getAlbum(selection + 0).img;
    //console.log(getAlbum(selection + 0));
    img3.src = getAlbum(selection + 1).img;
    //console.log(getAlbum(selection + 1));
    img4.src = getAlbum(selection + 2).img;
    //console.log(getAlbum(selection + 2));
}

