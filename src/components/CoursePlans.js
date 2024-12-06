import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoursePlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the plan data from the variants endpoint
    axios
      .get('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch/variants')
      .then((response) => {
        // console.log('Plan Data:', response.data.data.items);
        
        // Extract plan items
        const planItems = response.data.data.items.map(plan => ({
          name: plan.name,
          availableStock: plan.available_stock,
          discountAmount: plan.discount_amount,
          finalPrice: plan.final_price,
          id: plan.id,
          isEnrolled: plan.is_enrolled,
          isExclusive: plan.is_exclusive,
          maxOrderQuantity: plan.max_order_quantity,
          maxUserPurchaseLimit: plan.max_user_purchase_limit,
        }));
        
        setPlans(planItems); // Set the plan data in state
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching plan data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading plans...</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Plans</h2>
      <div className="space-y-4">
        {plans.length > 0 ? (
          plans.map((plan, index) => (
            <div
              key={plan.id || index}
              className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800">{plan.name || 'Plan Title'}</h3>
              <p className="text-gray-600">Available Stock: {plan.availableStock || 'N/A'}</p>
              <p className="text-lg font-bold text-gray-700">Discount: ₹{plan.discountAmount || '0'}</p>
              <p className="text-lg font-bold text-gray-700">Final Price: ₹{plan.finalPrice || '0'}</p>

              <div className="text-sm text-gray-600">
                <p>Max Order Quantity: {plan.maxOrderQuantity !== -1 ? plan.maxOrderQuantity : 'Unlimited'}</p>
                <p>Max User Purchase Limit: {plan.maxUserPurchaseLimit !== -1 ? plan.maxUserPurchaseLimit : 'Unlimited'}</p>
                <p>{plan.isExclusive ? 'Exclusive' : 'Standard'}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No plans available</div>
        )}
      </div>
    </div>
  );
};

export default CoursePlans;
