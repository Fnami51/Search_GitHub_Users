import * as s from './SearchPage.styled'

function SearchPage() {
    //Read username from form
    //Get request in Api
    //Write in Context
    //Navigator in other page

    return (
        <s.Background>
            <s.Form id="formSearch" onSubmit={() => alert('Press button')}>
                <s.Input type="text" name="username" id="formUsernsme" placeholder="Username in GitHub"/>
                <s.Button id="formEnter" type="submit">
                    🔎
                </s.Button>
            </s.Form>
        </s.Background>
    )
  }
  
  export default SearchPage