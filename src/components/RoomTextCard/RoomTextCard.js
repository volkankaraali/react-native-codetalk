import React from 'react';
import { View,Text} from 'react-native';

import styles from './RoomTextCard.style';
import { formatDistance, parseISO } from 'date-fns';
function RoomTextCard({data}) {

  const formatDate=formatDistance(parseISO(data.date), new Date(), { addSuffix: true });
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.username}>{data.username}</Text>
        <Text style={styles.date}>{formatDate}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </View>
  );
}

export default RoomTextCard;