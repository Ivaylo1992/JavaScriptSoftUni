import { assert } from "chai";
import { planYourTrip } from "../planYourTrip.js";

describe("Test planYourTrip", function () {
  describe("choosingDestination", function () {
    it("should thrown an error if the year is not 2024", function () {
      assert.throws(() => {
        planYourTrip.choosingDestination("Ski Resort", "Winter", 2025);
      });
    });
    it("should thrown an error if the destination is not 'Ski Resort'", function () {
      assert.throws(() => {
        planYourTrip.choosingDestination("Beach Resort", "Winter", 2024);
      });
    });
    it("should return a expected message if the destination = 'Ski Resort' and season = 'Winter'", function () {
      const expected =
        "Great choice! The Winter is the perfect time to visit the Ski Resort.";

      const actual = planYourTrip.choosingDestination(
        "Ski Resort",
        "Winter",
        2024
      );

      assert.equal(expected, actual);
    });
    it("should return a expected message if the destination = 'Ski Resort' and season is different than 'Winter'", function () {
      const expected =
        "Consider visiting during the Winter for the best experience at the Ski Resort.";

      const actual = planYourTrip.choosingDestination(
        "Ski Resort",
        "Summer",
        2024
      );

      assert.equal(expected, actual);
    });
  });
  describe("exploreOptions", function () {
    it("should throw an error if the activities list is not an array", function () {
      assert.throws(() => {
        planYourTrip.exploreOptions("not an array", 12);
      });
    });
    it("should throw an error if the activityIndex is not an integer", function () {
      assert.throws(() => {
        planYourTrip.exploreOptions([1, 2, 3], "123");
      });
      assert.throws(() => {
        planYourTrip.exploreOptions([1, 2, 3], 1.5);
      });
    });
    it("should throw an error if the activityIndex is below 0", function () {
      assert.throws(() => {
        planYourTrip.exploreOptions([1, 2, 3], -1);
      });
    });
    it("should throw an error if the activityIndex is bigger than the length of the activities", function () {
      assert.throws(() => {
        planYourTrip.exploreOptions([1, 2, 3], 4);
      });
    });
    it("should throw an error if the activityIndex is equal to the length of the activities", function () {
      assert.throws(() => {
        planYourTrip.exploreOptions([1, 2, 3], 3);
      });
    });
    it("should return the activities without the one at the activityIndex", function () {
      const expectedResult = "sofia, varna";

      const actual = planYourTrip.exploreOptions(
        ["sofia", "plovdiv", "varna"],
        1
      );

      assert.equal(expectedResult, actual);
    });
  });
  describe("estimateExpenses", function () {
    it("should thrown an error if the distanceInKilometers is not a number", function () {
      assert.throws(() => {
        planYourTrip.estimateExpenses("12", 123);
      });
    });
    it("should thrown an error if the fuelCostPerLiter is not a number", function () {
      assert.throws(() => {
        planYourTrip.estimateExpenses(12, "12");
      });
    });
    it("should thrown an error if the distanceInKilometers is less than 0", function () {
      assert.throws(() => {
        planYourTrip.estimateExpenses(-1, 123);
      });
    });
    it("should thrown an error if the distanceInKilometers is equal to 0", function () {
      assert.throws(() => {
        planYourTrip.estimateExpenses(0, 123);
      });
    });
    it("should thrown an error if the fuelCostPerLiter is less than 0", function () {
      assert.throws(() => {
        planYourTrip.estimateExpenses(1, -1);
      });
    });
    it("should thrown an error if the fuelCostPerLiter is equal to 0", function () {
      assert.throws(() => {
        planYourTrip.estimateExpenses(1, 0);
      });
    });

    it("should return the expected message with totalCost less than 500", function () {
      const expected =
        "The trip is budget-friendly, estimated cost is $100.00.";

      const actual = planYourTrip.estimateExpenses(10, 10);

      assert.equal(expected, actual);
    });
    it("should return the expected message with totalCost equal 500", function () {
      const expected =
        "The trip is budget-friendly, estimated cost is $500.00.";

      const actual = planYourTrip.estimateExpenses(50, 10);

      assert.equal(expected, actual);
    });
    it("should return the expected message with totalCost more than 500", function () {
      const expected =
        "The estimated cost for the trip is $600.00, plan accordingly.";

      const actual = planYourTrip.estimateExpenses(60, 10);

      assert.equal(expected, actual);
    });
  });
});
