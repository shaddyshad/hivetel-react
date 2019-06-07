import React from 'react';

const QuickStatsLayout = props => {
    return(
        <div className="row">
            <div className="col-lg-2 col-xs-6">
                <InboundQuickStats />
            </div>
            <div className="col-lg-2 col-xs-6">
                <OutboundQuickStats />
            </div>
            <div className="col-lg-2 col-xs-6">
                <TotalTalktimeStats />
            </div>
            <div className="col-lg-2 col-xs-6">
                <AccountBalanceStats />
            </div>
            <div className="col-lg-4 col-xs-12">
                <ActiveAgentsTrends />
            </div>
        </div>
    );
}

export default QuickStatsLayout;