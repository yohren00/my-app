import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faAddressCard, faTshirt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBook, faAddressCard, faTshirt);

function MenuList() {
    let icon = (index) => {
        return [
            <FontAwesomeIcon icon={["fas", "address-card"]} size="lg" fixedWidth />,
            <FontAwesomeIcon icon={["fas", "book"]} size="lg" fixedWidth />,
            <FontAwesomeIcon icon={["fas", "tshirt"]} size="lg" fixedWidth />,

        ][index]
    }

    return (
        <>
            <List>
                {["首頁", "GitHub資訊", "電商網頁作品"].map((text, index) => (
                    <ListItem button key={text} component={NavLink} to={["/", "/myGitHub", "/ecommerce"][index]}>
                        <ListItemIcon>{icon(index)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default MenuList;
