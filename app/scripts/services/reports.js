'use strict';

/**
 * @ngdoc service
 * @name brokersFrontendApp.Reports
 * @description
 * # Reports
 * Service in the brokersFrontendApp.
 */
angular.module('brokersFrontendApp')
    .service('Reports', function($q, firebaseRef) {
        var mainRef = firebaseRef.get();

        return {
            generateReport: function(results) {
                var adaptedProfile = results['adapted_profile'],
                    naturalProfile = results['natural_profile'],
                    primaryConduct = results['conducts'][0],
                    secondaryConduct = results['conducts'][1];

                var reportsRef = mainRef.child('report_information');

                var primaryConductDeferred = $q.defer(),
                    secondaryConductDeferred = $q.defer(),
                    adaptedProfileDeferred = $q.defer(),
                    naturalProfileDeferred = $q.defer();

                reportsRef.child('conducts').child(primaryConduct).once('value',
                    primaryConductDeferred.resolve, primaryConductDeferred.reject);
                reportsRef.child('conducts').child(secondaryConduct).once('value',
                    secondaryConductDeferred.resolve, secondaryConductDeferred.reject);
                reportsRef.child('personalities').child(adaptedProfile).once('value',
                    adaptedProfileDeferred.resolve, adaptedProfileDeferred.reject);
                reportsRef.child('personalities').child(naturalProfile).once('value',
                    naturalProfileDeferred.resolve, naturalProfileDeferred.reject);

                var reportPromise = $q.all([
                    primaryConductDeferred.promise, secondaryConductDeferred.promise,
                    adaptedProfileDeferred.promise, naturalProfileDeferred.promise
                ]);

                reportPromise = reportPromise
                    .then(function(Snapshots) {

                        var report = {
                            letters: {
                                adaptedProfile: adaptedProfile,
                                naturalProfile: naturalProfile,
                                primaryConduct: primaryConduct,
                                secondaryConduct: secondaryConduct
                            },
                            primaryConduct: Snapshots[0].val(),
                            secondaryConduct: Snapshots[1].val(),
                            adaptedProfile: Snapshots[2].val(),
                            naturalProfile: Snapshots[3].val()
                        };

                        return report;
                    });

                return reportPromise;
            }
        };
    });
