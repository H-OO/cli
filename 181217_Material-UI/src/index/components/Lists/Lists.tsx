import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import { mapStateToProps, mapDispatchToProps } from '../../actions/listsActionCreater';

interface I_props {
  handler?: () => void;
  [propsName: string]: any;
}

class Lists extends React.Component {
  public render(): JSX.Element {
    const { handler }: I_props = this.props;
    return (
      <div className="List">
        <h3>【List】</h3>
        <Link to="/">to Home</Link>
        <br />
        <List component="nav">
          <ListItem button onClick={handler}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
