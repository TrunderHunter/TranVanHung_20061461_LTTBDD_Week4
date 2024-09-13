import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [provisional, setProvisional] = useState(141800);
  const [total, setTotal] = useState(141800);

  useEffect(() => {
    handleProvisional();
  }, [quantity]);

  useEffect(() => {
    handleTotal();
  }, [discount]);

  useEffect(() => {
    handleTotal();
  }, [provisional]);

  const handleProvisional = () => {
    setProvisional(141800 * quantity);
  };

  const handleTotal = () => {
    setTotal(provisional - (provisional * discount) / 100);
  };

  const randomDiscount = () => {
    setDiscount(Math.floor(Math.random() * 80) + 10);
    handleTotal();
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      {/* Product Image and Info */}
      <View style={styles.productContainer}>
        <Image
          source={require("./src/assets/img/book.png")}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={styles.productProvider}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <Text style={styles.oldPrice}>141.800 đ</Text>
        </View>
      </View>

      {/* Quantity Control */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrease}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.saveText}>Mua sau</Text>
        </TouchableOpacity>
      </View>

      {/* Coupon Section */}
      <View style={styles.couponContainer}>
        <Text style={styles.couponLabel}>Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text style={styles.couponLink}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      {/* Discount Input */}
      <View style={styles.discountContainer}>
        <TextInput
          style={styles.discountInput}
          value={discount.toString()}
          placeholder="Mã giảm giá"
        />
        <TouchableOpacity style={styles.applyButton} onPress={randomDiscount}>
          <Text style={styles.applyText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      {/* Total Calculation */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Tạm tính</Text>
        <Text style={styles.totalPrice}>{provisional} đ</Text>
      </View>

      {/* Total Calculation */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Thành tiền</Text>
        <Text style={styles.totalPrice}>{total} đ</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => alert("Đặt hàng thành công")}
      >
        <Text style={styles.checkoutText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 32,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 150,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productProvider: {
    fontSize: 14,
    color: "#888",
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 16,
    color: "#888",
    textDecorationLine: "line-through",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 18,
  },
  saveText: {
    color: "#007BFF",
    marginLeft: "auto",
  },
  couponContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  couponLabel: {
    fontSize: 14,
    color: "#888",
  },
  couponLink: {
    color: "#007BFF",
  },
  discountContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  discountInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    padding: 8,
  },
  applyButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 8,
  },
  applyText: {
    color: "#fff",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 16,
    color: "red",
  },
  checkoutButton: {
    backgroundColor: "red",
    padding: 16,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
