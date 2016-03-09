import {AlertingService} from './AlertingService'

    describe('AlertingService', function () {
        it('WhenInstanceIsCreated_CurrentAlertsLength_Equals0', function () {
            var instance = new AlertingService();
            expect(instance.currentAlerts.length).toEqual(0);
        });
        it('WhenInstanceIsCreated_CurrentAlertsLength_Equals0', function () {
            var instance = new AlertingService();
            instance.addWarning("addWarning");
            expect(instance.currentAlerts.length).toEqual(1);
        });
    });

