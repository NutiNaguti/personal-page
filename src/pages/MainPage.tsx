// Material UI imports
import {Grid, Container, Paper, Typography} from '@mui/material';
import {ShowDonut} from '../components/Donut';

import styles from '../styles/MainPage.module.css';

export default function MainPage() {
  return (
    <>
      <Grid>
        <Container maxWidth="md">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            marginTop="9vh"
          >
            <Grid item>
              <Paper
                sx={{
                  padding: "20px",
                  boxShadow: "0px 0px 25px rgba(255, 255, 255)",
                  background: "#ffead1",
                  borderRadius: "1.5rem",
                  minHeight: "auto",
                }}
                className={styles.transparentPaper}
              >
              <ShowDonut />
                <div>
                  <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    sx={{
                      color: "#0C0C0C",
                      fontFamily: "Yanone Kaffeesatz",
                    }}
                  >
                    Заголовок!
                  </Typography>
                  <Typography
                    align="center"
                    sx={{
                      marginBottom: "20px",
                      color: "#0C0C0C",
                      fontFamily: "Yanone Kaffeesatz",
                    }}
                  >
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений
                    пять веков, но и перешагнул в электронный дизайн. Его
                    популяризации в новое время послужили публикация листов
                    Letraset с образцами Lorem Ipsum в 60-х годах и, в более
                    недавнее время, программы электронной вёрстки типа Aldus
                    PageMaker, в шаблонах которых используется Lorem Ipsum.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
