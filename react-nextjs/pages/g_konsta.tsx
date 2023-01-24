import {App, BlockTitle, List, ListItem, Navbar, Page} from "konsta/react";

export default  function (){
    return(
        <>
            <App theme={"material"}>
                <Page>
                    <Navbar title={"List"}></Navbar>
                    <BlockTitle>Links, Header, Footer</BlockTitle>
                    <List strongIos outlineIos>
                        <ListItem link header={"Name"} title={"Jhon Doe"} after={"Edit"}>

                        </ListItem>
                    </List>
                </Page>

            </App>

        </>
    )
}