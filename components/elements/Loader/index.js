import React from 'react';

const Loader = ({price}) => (
        <div className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
            <style jsx>{`
                .lds-ellipsis {
                    display: -webkit-box;
                    position: ${price ? 'absolute':'relative'};
                    width: 64px;
                    height: 64px;
                    margin: 20px auto;
                    left:${price && '220px'};
                    right:${price && '0'};
                }
           
                .lds-ellipsis div {
                    position: absolute;
                    top: 27px;
                    width: 11px;
                    height: 11px;
                    border-radius: 50%;
                    background: #bdc3c7;
                    animation-timing-function: cubic-bezier(0, 1, 1, 0);
                }
                .lds-ellipsis div:nth-child(1) {
                    left: 6px;
                    animation: lds-ellipsis1 0.6s infinite;
                }
                .lds-ellipsis div:nth-child(2) {
                    left: 6px;
                    animation: lds-ellipsis2 0.6s infinite;
                }
                .lds-ellipsis div:nth-child(3) {
                    left: 26px;
                    animation: lds-ellipsis2 0.6s infinite;
                }
                .lds-ellipsis div:nth-child(4) {
                    left: 45px;
                    animation: lds-ellipsis3 0.6s infinite;
                }
                @keyframes lds-ellipsis1 {
                    0% {
                        transform: scale(0);
                    }
                    100% {
                        transform: scale(1);
                    }
                    }
                    @keyframes lds-ellipsis3 {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(0);
                    }
                    }
                    @keyframes lds-ellipsis2 {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(19px, 0);
                    }
                }
            `}
            </style>
        </div>
    );

export default Loader;
