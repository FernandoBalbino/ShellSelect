
import { Page, Text, View, Document, StyleSheet  } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
    
      backgroundColor: 'white',
      overflow:'hidden',
      
      
    },
    section: {
      margin: 10,
      padding: 10,
     
      overflow:'hidden'
    }

  });

export default function pdpViewer(){
    return(
        <>
        <Document style={{}}>
    <Page size="A4"   style={styles.page}>
      
      <View style={styles.section}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non fermentum enim. Maecenas vel lectus nec sem porttitor pulvinar. Nunc lorem ante, volutpat at interdum ut, vestibulum in nisi. Morbi cursus diam in viverra mollis. Nam eu ante pulvinar enim finibus suscipit. Mauris tempor vestibulum egestas. Integer vel dolor justo. Suspendisse bibendum et ante at aliquet. Donec felis enim, feugiat non mi quis, pulvinar vulputate turpis.

Integer tristique nisi at imperdiet venenatis. Donec enim neque, consectetur ac laoreet sit amet, interdum et diam. Sed cursus in tortor non cursus. Praesent gravida, tortor id bibendum ultricies, ipsum risus suscipit leo, sodales convallis massa risus at tellus. Nunc ac tincidunt lorem. Sed viverra maximus leo non semper. Nunc iaculis ac tellus vitae iaculis. Morbi turpis ipsum, pellentesque eu elementum a, semper id sem. Sed turpis nibh, hendrerit eu nulla nec, vehicula vestibulum nisi. Suspendisse sit amet sem blandit, rhoncus ligula a, accumsan erat. Nullam placerat sapien est, quis iaculis lorem laoreet eu. Phasellus et vehicula enim.

Aliquam porttitor tristique tortor at fermentum. Nam gravida pulvinar risus, et dignissim felis suscipit id. Praesent nunc lorem, suscipit ut purus vitae, lacinia lacinia arcu. In elementum in augue at posuere. Praesent commodo quis justo nec ullamcorper. Aenean vulputate eu turpis in pellentesque. Proin pretium enim quis facilisis vestibulum. Sed sollicitudin turpis libero, ut vehicula justo commodo ut. Nunc vitae egestas ante, sit amet interdum dui. Suspendisse potenti. Maecenas rhoncus lectus felis, laoreet finibus ante porta sit amet. Suspendisse mattis commodo nunc, a commodo mauris. Praesent eget lobortis nunc, id tempor erat. Praesent eu orci eu nulla aliquet vulputate sit amet in elit. Vestibulum dui eros, mattis eget est et, efficitur ullamcorper nibh.

Vestibulum sit amet augue neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempor tellus id consectetur iaculis. Duis quis nibh non lectus finibus tempor a sit amet nisi. Morbi vitae nisl eget elit consectetur feugiat non non orci. Mauris eget ipsum quis lacus venenatis ultrices. Sed iaculis ut risus non facilisis. Mauris imperdiet purus a tortor pretium posuere. Integer eu mauris et magna imperdiet faucibus. Vivamus commodo massa dolor, id consequat ligula scelerisque vitae.

Etiam et sem a turpis tempus tempor.  </Text>
      </View>
     
    </Page>
  </Document>
        </>
    )
}