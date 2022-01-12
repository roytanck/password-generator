const init = () => {
    const targetLength = 20;
    let field = document.getElementById( 'password' );
    // character ranges
    const chars = [
        'abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '1234567890',
        '!@#$%^&*?-=_~'
    ];
    // initialize the password character array
    let passwordChars = [];
    // add one char from each range to satisfy password requirements
    for( let i=0; i<chars.length; i++ ){
        passwordChars.push( chars[i][ Math.floor( Math.random() * chars[i].length ) ] );
    }
    // concatentate the chars into one string to pick the rest of the characters from
    let allChars = chars.join('');
    // add characters until the target length is reached
    for( let i=passwordChars.length; i<targetLength; i++ ){
        passwordChars.push( allChars[ Math.floor( Math.random() * allChars.length ) ] );
    }
    // randomize the array so the first four are not always from range 1-4
    passwordChars.sort( ( a, b ) => {
        return ( Math.random() < 0.5 ) ? -1 : 1;
    } );
    // create the password string, fill the field and select it for copying
    field.value = passwordChars.join('');
    field.select();
    // re-select the contents when the field receives focus
    field.addEventListener( 'focus', (e) => {
        return e.target.select();
    }, false );

}

document.addEventListener( 'DOMContentLoaded', init, false );
