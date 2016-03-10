import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject,
    injectAsync
} from 'angular2/testing';

import {provide, Injector} from 'angular2/core'

import {Alert} from './Alert'
import {AlertingComponent} from './AlertingComponent'
import {AlertingService} from './AlertingService'

describe('AlertingService', function() {
    class AlertingServiceMock {
        currentAlerts: Array<Alert> = new Array<Alert>();

        addAlert(type: string, message: string) {
            var alert = new Alert(type, message);
            this.currentAlerts.push(alert);
        }

        removeAlert(alert: Alert) {
            for (var index = 0; index < this.currentAlerts.length; index++) {
                if (this.currentAlerts[index] === alert) {
                    this.currentAlerts.splice(index, 1);
                    break;
                }
            }
        }
    }

    var injector: Injector;
    var instance: AlertingComponent = null;
    var _alertingService: AlertingService;

    beforeEach(() => {
        injector = Injector.resolveAndCreate([
            provide(AlertingService, { useClass: AlertingServiceMock })
        ]);

        _alertingService = injector.get(AlertingService);
    });

    it('AlertingComponent_alerts_AreEqualToAlertingServiceCurrentAlerts', function() {
        // Arrange
        instance = new AlertingComponent(_alertingService);

        // Assert
        expect(instance.alerts()).toEqual(_alertingService.currentAlerts);
    });

    it('AlertingComponent_hasAlerts_ReturnTrueWhenServiceHasAlerts', function() {
        // Arrange
        instance = new AlertingComponent(_alertingService);
        _alertingService.addAlert('info', 'message');

        // Assert
        expect(instance.hasAlerts()).toEqual(true);
    });

    it('AlertingComponent_hasAlerts_ReturnFalseWhenServiceAlertsAreEmpty', function() {
        // Arrange
        instance = new AlertingComponent(_alertingService);

        // Assert
        expect(instance.hasAlerts()).toEqual(false);
    });

    it('AlertingComponent_hasAlerts_ReturnFalseWhenServiceAlertsAreEmpty', function() {
        // Arrange
        instance = new AlertingComponent(_alertingService);
        var alert: Alert = new Alert('info', 'message');

        // Act
        _alertingService.currentAlerts = [alert];
        instance.removeAlert(alert)

        // Assert
        expect(instance.hasAlerts()).toEqual(false);
    });
});
