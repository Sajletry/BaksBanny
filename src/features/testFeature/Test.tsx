import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

interface IProps {
    testValue: boolean;
    testAction: any
}

class Test extends React.Component<IProps> {
    constructor( props: IProps ) {
        super( props );
        this.onClickEvent = this.onClickEvent.bind( this );

    }

    public onClickEvent() {
        console.log(this.props.testValue);
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
    testValue: selectors.getTestValue( state )
} );

const mapDispatchToProps = ( dispatch: any ) => ( {
    testAction: ( value: boolean ) => dispatch( actions.dispatchTestAction( value ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Test );