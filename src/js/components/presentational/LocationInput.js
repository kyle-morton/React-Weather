import React from 'react';

const LocationInput = ({zipCodeChanged, zipCode}) => {
    let input;
    return(
        <div className='text-center col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-xs-12'>
            <form onSubmit={(e) => zipCodeChanged(input.value, e)}>
                <label>
                    Zip Code
                </label>
                <input type='text' className='form-control' maxLength='5' ref={node => { input = node; }} />
                <br />
                <button type='submit' className='btn btn-default'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default LocationInput;