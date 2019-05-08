function bool(){
    return true;
}
function char(chaine) {
    return chaine;
}
function char2(chaine1, chaine2){
    return chaine1 +chaine2;
}
function num(nb1, nb2){
    if(nb1>nb2){
        return "Le premier nombre est plus grand"
    } else if(nb1<nb2) {
        return "Le premier nombre est plus petit"
    } else {
        return "Les deux nombres sont identiques"
    }
}
function nuChar(nb, chaine){
    return nb + chaine;
}
function brtd(nom, prenom, age){
    return "Bonjour "+ nom +" "+ prenom +", tu as " + age + " ans";
}
function genre(age, genre){
    if (age > 18 && genre == "homme"){
        return "Vous êtes un homme et vous êtes majeur"
    } else if (age < 18 && genre == "homme") {
        return "Vous êtes un homme et vous êtes mineur"
    } else if (age > 18 && genre == "femme") {
        return "Vous êtes une femme et vous êtes majeur"
    } else if (age < 18 && genre == "femme") {
        return "Vous êtes une femme et vous êtes mineur"
    } else {
        return "vous n'êtes pas normal"
    }
}
function num2(nb1, nb2, nb3) {
    result = nb1 + nb2 + nb3;
    return result
}