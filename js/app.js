function generic_greeting(user)
{
    console.log(`wellcome!! ${user}`)
}

generic_greeting( `buba` )
generic_greeting( `simret` )
generic_greeting( `chaki su` )
generic_greeting( `elmo` )



function find_specific_greeting( users, search_user )
{
    for ( let counter = 0; counter < users[counter].length; counter++ )
    {
        if ( users[counter] === `admin` )
        {

            return true
        }
    }
    return false

}
let check_for_admin = find_specific_greeting( [`admin`,`simret` ,`rsoe` ,`bettye`] )
console.log(check_for_admin)