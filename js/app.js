function generic_greeting(user)
{
    console.log(`wellcome!! ${user}`)
}

generic_greeting( `buba` )
generic_greeting( `simret` )
generic_greeting( `chaki su` )
generic_greeting( `elmo` )



function find_specific_greeting( users )
{
    for ( let counter = 0; counter < users.length; counter++ )
    {
        if ( users === `admin` )
        {

            return true
        }
    }
    return false

}
let check_for_admin = find_specific_greeting( `simret` )
console.log(check_for_admin)