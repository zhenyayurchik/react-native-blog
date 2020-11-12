import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';

export const PostScreen = ({ navigation, route }) => {
  const post = route?.params;
  const iconName = post.booked ? 'ios-star' : 'ios-star-outline'
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Star"
            iconName={iconName}
            onPress={() => console.log('press')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);


  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно уверены, что хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        { text: 'Удалить', style: 'destructive', onPress: () => {} },
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
});
