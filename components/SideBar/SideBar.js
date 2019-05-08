import React  from 'react'
import withStyles from 'react-jss'
import SideBarNavLink from './SideBarNavLink'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 180px',
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[3],
      zIndex: 300
    },
    titleSpace: {
      color: theme.palette.background.main,
      margin: '0px auto',
      alignSelf: 'center',
      flexShrink: 0
    },
    titleHeader: {
      fontSize: '3em',
      fontWeight: 'bold'
    },
    tableOfContents: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}

const SideBar = ({
  classes,
  activePage,
  handleActivePageChange,
  pages
}) => {
  return <div id='sidebar' className={classes.root}>
    <div className={classes.titleSpace}>
      <h1 className={classes.titleHeader}>OIP</h1>
    </div>
    <nav className={classes.tableOfContents}>
      {Object.keys(pages).map((page, i) => {
        return <SideBarNavLink
          pageLinkName={page}
          key={i}
          handlePageLinkClick={handleActivePageChange}
          activePageLink={activePage}
        />
      })}
    </nav>
  </div>
}

export default withStyles(styles)(SideBar)
