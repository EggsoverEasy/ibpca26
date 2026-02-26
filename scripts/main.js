const aboutMe =
  '<p>Actual Dweeb that tends to be shy, kind of a dork Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente voluptates, eos deleniti, voluptatibus assumenda culpa perspiciatis dolore incidunt cumque adipisci, animi quidem quasi. Possimus tempore ducimus non optio fuga.</p><p>Loves breasts, anime, video games, and taking long naps. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente voluptates, eos deleniti, voluptatibus assumenda culpa perspiciatis dolore incidunt cumque adipisci, animi quidem quasi. Possimus tempore ducimus non optio fuga.</p>';

const aboutHobbies =
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur facilisis felis, vitae interdum neque molestie in. Pellentesque eu metus quis urna varius imperdiet in id ex. Proin id purus in quam molestie vehicula sed vitae libero. Ut ut consectetur nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris sit amet arcu eget purus tempor commodo quis sit amet turpis. Aliquam eget maximus leo, accumsan bibendum tortor. Aliquam arcu mauris, pretium a facilisis sit amet, maximus eu risus. Nunc vitae efficitur est, quis viverra mauris.</p><p> Pellentesque quis tristique turpis. Ut id sem imperdiet mi volutpat congue sed quis magna. Nulla lectus sem, molestie id ullamcorper at, lobortis vel mi. Duis molestie ex neque, ac lobortis leo aliquam non. Nunc viverra porttitor hendrerit. Integer tincidunt interdum erat auctor blandit. </p>';

const aboutFaves =
  '<p>Nam tellus turpis, semper ac maximus ut, mollis at magna. Etiam dictum turpis arcu, vehicula feugiat felis luctus in. Nunc vel suscipit justo. Suspendisse commodo leo eget turpis rutrum tempus. Vivamus vehicula turpis non sapien interdum, eu pellentesque massa facilisis. Praesent at mauris et lectus semper tincidunt eget et nunc.</p><p> Pellentesque dictum sed tellus vel viverra. Aenean porttitor dolor in ex tincidunt, vel porta nisi facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam quis lorem ante.</p><p> Proin maximus nisi sapien, quis cursus felis hendrerit euismod. Donec vitae sem ligula. Curabitur blandit at eros quis efficitur.</p>';

function changeAbout() {
  document.getElementById('textBody').innerHTML = aboutMe;
}

function changeHobbies() {
  document.getElementById('textBody').innerHTML = aboutHobbies;
}

function changeFaves() {
  document.getElementById('textBody').innerHTML = aboutFaves;
}
