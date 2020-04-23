import React from 'react';

class ListItems extends React.Component {
    render(){
        return (
            <h5 className="text-primary">Hello <span className="btn btn-danger btn-sm float-right small">delete</span></h5>
        );
    }
}