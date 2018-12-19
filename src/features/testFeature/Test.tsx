import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

interface IProps {
    test: boolean;
    testAction: any
}

class Test extends React.Component<IProps> {
    constructor( props: IProps ) {
        super( props );
        this.onClickEvent = this.onClickEvent.bind( this );

    }

    public onClickEvent() {
        this.props.testAction( true );
    }


    public render() {
        return (
            <div onClick={this.onClickEvent}>
                hello
            </div>
        )
    }
};

const mapStateToProps = ( state: any ) => ( {
    test: state.test
} );

const mapDispatchToProps = ( dispatch: any ) => ( {
    testAction: ( value: boolean ) => dispatch( actions.dispatchTestAction( value ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Test );